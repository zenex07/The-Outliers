import express from "express"
import cors from "cors"
// import {cars} from "./data/cars.js"
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 3000;


// Dummy Data:
const cars =  [
    {
      id: "gtr-r35",
      name: "Modified GTR R35",
      image: "https://files.hodoor.world/main/42093052-d64b-4cfd-8e16-b7f221cdb06f.jpeg",
      specs: "1000HP | Custom Body Kit | Performance Tuned",
      description: "This heavily modified Nissan GT-R R35 represents the pinnacle of Japanese engineering combined with cutting-edge performance upgrades. Featuring a fully built engine capable of producing 1000 horsepower, this beast maintains perfect daily drivability while being ready for the track at a moment's notice.",
      price: "$150,000",
      features: [
        "Custom titanium exhaust system",
        "Carbon fiber body kit",
        "Upgraded twin-turbo system",
        "Forged internals",
        "Custom ECU mapping",
        "Air lift suspension"
      ],
      performance: {
        horsepower: "1000 HP",
        acceleration: "0-60 mph in 2.5s",
        topSpeed: "215 mph"
      },
      keywords: ["gtr", "nissan", "r35", "turbo", "japanese", "modified", "performance"]
    },
    {
      id: "bmw-m4",
      name: "Custom BMW M4",
      image: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: "Stage 2 | Carbon Fiber | Track Ready",
      description: "This BMW M4 has been meticulously modified to deliver an exceptional driving experience. With Stage 2 performance upgrades and extensive carbon fiber components, it strikes the perfect balance between street presence and track capability.",
      price: "$125,000",
      features: [
        "Full carbon fiber aero kit",
        "KW V3 coilovers",
        "Stage 2 tune",
        "M Performance exhaust",
        "Custom wheels",
        "Racing bucket seats"
      ],
      performance: {
        horsepower: "600 HP",
        acceleration: "0-60 mph in 3.1s",
        topSpeed: "190 mph"
      },
      keywords: ["bmw", "m4", "german", "modified", "performance", "luxury"]
    },
    {
      id: "porsche-gt3",
      name: "Porsche 911 GT3",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: "Racing Spec | Aero Package | Custom Interior",
      description: "This Porsche 911 GT3 has been enhanced with racing-specific modifications while maintaining its iconic character. The comprehensive aero package and custom interior make it a true track weapon that's still comfortable enough for street use.",
      price: "$195,000",
      features: [
        "Custom roll cage",
        "Carbon ceramic brakes",
        "GT3 Cup car wing",
        "Lightweight flywheel",
        "Custom suspension setup",
        "Race-spec wheels"
      ],
      performance: {
        horsepower: "520 HP",
        acceleration: "0-60 mph in 2.9s",
        topSpeed: "198 mph"
      },
      keywords: ["porsche", "911", "gt3", "german", "racing", "track", "performance"]
    },
    {
      id: "supra-mk4",
      name: "Toyota Supra MK4",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: "1200HP | Single Turbo | Show Car",
      description: "This legendary Toyota Supra MK4 has been built to perfection with a single turbo setup producing over 1200 horsepower. Every aspect of this build has been carefully considered, from the custom paint to the fully built 2JZ engine.",
      price: "$180,000",
      features: [
        "Built 2JZ-GTE engine",
        "Precision single turbo",
        "Custom wide body kit",
        "Full roll cage",
        "Custom interior",
        "Air suspension"
      ],
      performance: {
        horsepower: "1200 HP",
        acceleration: "0-60 mph in 2.4s",
        topSpeed: "225 mph"
      },
      keywords: ["toyota", "supra", "mk4", "2jz", "japanese", "modified", "turbo"]
    },
    {
      id: "mustang-shelby",
      name: "Ford Mustang Shelby GT500",
      image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: "850HP | Supercharged | Track Package",
      description: "This modified Shelby GT500 takes American muscle to the next level with a supercharged V8 producing 850 horsepower. Featuring extensive suspension and brake upgrades, it's equally at home on the street or track.",
      price: "$145,000",
      features: [
        "Upgraded supercharger",
        "Custom exhaust system",
        "Track-focused suspension",
        "Brembo brake package",
        "Carbon fiber components",
        "Custom tune"
      ],
      performance: {
        horsepower: "850 HP",
        acceleration: "0-60 mph in 2.8s",
        topSpeed: "205 mph"
      },
      keywords: ["ford", "mustang", "shelby", "american", "muscle", "supercharged"]
    },
    {
      id: "rx7-fd",
      name: "Mazda RX-7 FD",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: "500HP | Twin Turbo | Show Winner",
      description: "This meticulously restored and modified RX-7 FD features a rebuilt and strengthened 13B rotary engine with a custom twin-turbo setup. The car combines classic 90s JDM styling with modern performance upgrades.",
      price: "$95,000",
      features: [
        "Rebuilt 13B engine",
        "Custom twin-turbo system",
        "FEED body kit",
        "Work Meister wheels",
        "Custom interior",
        "Upgraded cooling system"
      ],
      performance: {
        horsepower: "500 HP",
        acceleration: "0-60 mph in 3.4s",
        topSpeed: "180 mph"
      },
      keywords: ["mazda", "rx7", "rotary", "japanese", "modified", "turbo"]
    },
    {
      id: "evo-9",
      name: "Mitsubishi Lancer Evolution IX",
      image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: "650HP | Rally Spec | Time Attack",
      description: "This Evolution IX has been built for maximum performance with a fully built 4G63 engine and rally-inspired modifications. Perfect for both street and track use, it represents the pinnacle of Evolution performance.",
      price: "$85,000",
      features: [
        "Built 4G63 engine",
        "Garrett turbocharger",
        "Voltex aero kit",
        "Custom suspension",
        "Sequential transmission",
        "Roll cage"
      ],
      performance: {
        horsepower: "650 HP",
        acceleration: "0-60 mph in 2.9s",
        topSpeed: "175 mph"
      },
      keywords: ["mitsubishi", "evo", "evolution", "rally", "japanese", "turbo"]
    },
    {
      id: "s15-silvia",
      name: "Nissan Silvia S15",
      image: "https://images.unsplash.com/photo-1580274518253-68e0eadb4b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: "450HP | Drift Spec | Show Car",
      description: "This S15 Silvia combines style and performance with a built SR20DET engine and professional drift setup. The car features a perfect balance of power and control, making it ideal for both drift events and street use.",
      price: "$75,000",
      features: [
        "Built SR20DET engine",
        "Garrett GTX3076R turbo",
        "Origin body kit",
        "Wisefab drift angle kit",
        "Custom roll cage",
        "Hydraulic handbrake"
      ],
      performance: {
        horsepower: "450 HP",
        acceleration: "0-60 mph in 3.8s",
        topSpeed: "165 mph"
      },
      keywords: ["nissan", "silvia", "s15", "drift", "japanese", "turbo"]
    }
  ];


// -----------------------------------------

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to validate ID
const isValidId = (id) => cars.some(car => car.id === id);

// GET all cars
app.get('/api/cars', (req, res) => {
    // Query parameters for filtering
    const { keyword, minPrice, maxPrice, minHp, maxHp } = req.query;
    
    let filteredCars = [...cars];

    // Filter by keyword
    if (keyword) {
        filteredCars = filteredCars.filter(car => 
            car.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase())) ||
            car.name.toLowerCase().includes(keyword.toLowerCase()) ||
            car.description.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    // Filter by price range
    if (minPrice || maxPrice) {
        filteredCars = filteredCars.filter(car => {
            const price = parseInt(car.price.replace(/[$,]/g, ''));
            return (!minPrice || price >= parseInt(minPrice)) &&
                   (!maxPrice || price <= parseInt(maxPrice));
        });
    }

    // Filter by horsepower range
    if (minHp || maxHp) {
        filteredCars = filteredCars.filter(car => {
            const hp = parseInt(car.performance.horsepower);
            return (!minHp || hp >= parseInt(minHp)) &&
                   (!maxHp || hp <= parseInt(maxHp));
        });
    }

    res.json(filteredCars);
});

// GET car by ID
app.get('/api/cars/:id', (req, res) => {
    const { id } = req.params;
    const car = cars.find(car => car.id === id);
    
    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }
    
    res.json(car);
});

// GET cars by manufacturer
app.get('/api/manufacturers/:manufacturer/cars', (req, res) => {
    const { manufacturer } = req.params;
    const manufacturerCars = cars.filter(car => 
        car.keywords.includes(manufacturer.toLowerCase())
    );
    
    if (manufacturerCars.length === 0) {
        return res.status(404).json({ error: 'No cars found for this manufacturer' });
    }
    
    res.json(manufacturerCars);
});

// GET performance stats
app.get('/api/cars/:id/performance', (req, res) => {
    const { id } = req.params;
    const car = cars.find(car => car.id === id);
    
    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }
    
    res.json(car.performance);
});

// GET features list
app.get('/api/cars/:id/features', (req, res) => {
    const { id } = req.params;
    const car = cars.find(car => car.id === id);
    
    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }
    
    res.json(car.features);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});