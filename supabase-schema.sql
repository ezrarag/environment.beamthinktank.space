-- Create projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  target_amount DECIMAL(10,2) NOT NULL,
  current_amount DECIMAL(10,2) DEFAULT 0,
  participants INTEGER DEFAULT 0,
  image_url TEXT,
  category VARCHAR(100) NOT NULL,
  status VARCHAR(50) DEFAULT 'fundraising',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create donations table
CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  community_node VARCHAR(255),
  donor_name VARCHAR(255),
  donor_email VARCHAR(255),
  stripe_payment_intent_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create community_nodes table
CREATE TABLE community_nodes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  participants INTEGER DEFAULT 0,
  total_raised DECIMAL(10,2) DEFAULT 0,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create milestones table
CREATE TABLE milestones (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  target_amount DECIMAL(10,2) NOT NULL,
  is_unlocked BOOLEAN DEFAULT FALSE,
  unlocked_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO projects (title, description, location, target_amount, current_amount, participants, image_url, category, status) VALUES
('Downtown Tree Canopy Initiative', 'Planting 500 native trees across downtown to improve air quality and provide shade for pedestrians.', 'Downtown District', 75000, 52000, 1200, 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', 'Tree Planting', 'fundraising'),
('Riverside Park Restoration', 'Restoring 15 acres of riverside parkland with native plants, walking trails, and wildlife habitats.', 'Riverside Area', 120000, 89000, 800, 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', 'Park Development', 'fundraising'),
('Community Solar Co-op', 'Installing solar panels on community buildings to provide clean energy and reduce carbon footprint.', 'Community Center', 200000, 45000, 2500, 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop', 'Renewable Energy', 'fundraising');

INSERT INTO community_nodes (name, participants, total_raised, description) VALUES
('Downtown District', 1200, 85000, 'The heart of our city with high foot traffic and urban development'),
('Riverside Area', 800, 65000, 'Natural area along the river with parks and walking trails'),
('Hilltop Community', 600, 45000, 'Residential area with views and green spaces'),
('Suburban Heights', 400, 32000, 'Family-friendly neighborhood with parks and schools');

INSERT INTO milestones (title, description, target_amount, is_unlocked) VALUES
('Community Recycling Program', 'Launch city-wide recycling initiative with collection points and education campaigns', 100000, TRUE),
('Solar Co-op Expansion', 'Extend solar panel installations to 50 more community buildings', 250000, FALSE),
('Clean-up Teams', 'Deploy professional environmental clean-up teams across all districts', 500000, FALSE),
('Climate Action Hub', 'Establish a central hub for climate education and community engagement', 1000000, FALSE);

-- Create indexes for better performance
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_donations_project_id ON donations(project_id);
CREATE INDEX idx_donations_community_node ON donations(community_node);
CREATE INDEX idx_donations_created_at ON donations(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE milestones ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access to community_nodes" ON community_nodes FOR SELECT USING (true);
CREATE POLICY "Allow public read access to milestones" ON milestones FOR SELECT USING (true);

-- Create policies for donation insertion
CREATE POLICY "Allow public donation insertion" ON donations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read access to donations" ON donations FOR SELECT USING (true);
