-- Create the products table
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    -- General Information
    product_name TEXT NOT NULL,
    product_type TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    sku TEXT UNIQUE NOT NULL,
    description TEXT,
    image_url TEXT,
    
    -- Product Specific
    variety TEXT,
    growing_period INTEGER, -- in days
    seeds_per_pack INTEGER,
    germination_rate INTEGER, -- percentage
    composition TEXT,
    weight DECIMAL(10,2), -- in kg
    application_method TEXT,
    is_organic BOOLEAN DEFAULT false,
    manufacturer TEXT,
    model TEXT,
    warranty_months INTEGER,
    power_source TEXT,
    
    -- Inventory
    current_stock INTEGER DEFAULT 0,
    reorder_level INTEGER DEFAULT 0,
    warehouse_location TEXT,
    shelf_life INTEGER, -- in months
    batch_number TEXT,
    expiry_date DATE,
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON products;
DROP POLICY IF EXISTS "Enable read-only access for anonymous users" ON products;

-- Create policy to allow all operations for authenticated users
CREATE POLICY "Enable all operations for authenticated users" ON products
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Create policy to allow read-only access for anonymous users
CREATE POLICY "Enable read-only access for anonymous users" ON products
    FOR SELECT
    USING (true);

-- Create the orders table
CREATE TABLE IF NOT EXISTS orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    -- Customer Information
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    reference_number TEXT,
    order_date DATE DEFAULT CURRENT_DATE,
    notes TEXT,
    
    -- Order Details
    subtotal DECIMAL(10,2) NOT NULL,
    tax DECIMAL(10,2) NOT NULL,
    shipping_fee DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending',
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create the order_items table
CREATE TABLE IF NOT EXISTS order_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE RESTRICT,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies for orders
CREATE POLICY "Enable all operations for authenticated users" ON orders
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Create policies for order_items
CREATE POLICY "Enable all operations for authenticated users" ON order_items
    FOR ALL
    USING (auth.role() = 'authenticated'); 