'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Session, AuthChangeEvent } from '@supabase/supabase-js'

const Context = createContext<{
  session: Session | null | undefined
  isLoading: boolean
}>({
  session: undefined,
  isLoading: true,
})

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [session, setSession] = useState<Session | null>()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
      } catch (error) {
        console.error('Error getting session:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getInitialSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event: AuthChangeEvent, session) => {
      setSession(session)
      
      if (event === 'SIGNED_IN') {
        // Only redirect if on an auth page
        if (pathname?.startsWith('/auth/')) {
          router.push('/dashboard')
          router.refresh()
        }
      }
      
      if (event === 'SIGNED_OUT') {
        router.push('/auth/login')
        router.refresh()
      }
    })

    return () => subscription.unsubscribe()
  }, [router, pathname])

  return (
    <Context.Provider value={{ session, isLoading }}>
      {!isLoading && children}
    </Context.Provider>
  )
}

export const useSession = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useSession must be used within a SupabaseProvider')
  }
  return context
} 