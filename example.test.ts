@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 7%;
    --foreground: 40 20% 95%;

    --card: 220 18% 10%;
    --card-foreground: 40 20% 95%;

    --popover: 220 18% 10%;
    --popover-foreground: 40 20% 95%;

    --primary: 42 78% 55%;
    --primary-foreground: 220 20% 7%;

    --secondary: 220 15% 15%;
    --secondary-foreground: 40 20% 95%;

    --muted: 220 12% 14%;
    --muted-foreground: 220 10% 55%;

    --accent: 42 78% 55%;
    --accent-foreground: 220 20% 7%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 220 12% 18%;
    --input: 220 12% 18%;
    --ring: 42 78% 55%;

    --radius: 0.5rem;

    --cta: 142 60% 45%;
    --cta-foreground: 0 0% 100%;
    --cta-hover: 142 60% 38%;

    --gold: 42 78% 55%;
    --gold-light: 42 70% 70%;
    --gold-dark: 42 85% 40%;

    --surface-elevated: 220 16% 12%;
    --surface-glass: 220 15% 10%;

    --font-display: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;

    --shadow-premium: 0 20px 60px -15px hsla(0, 0%, 0%, 0.5);
    --shadow-card: 0 4px 24px -4px hsla(0, 0%, 0%, 0.3);
    --shadow-glow-gold: 0 0 40px -10px hsla(42, 78%, 55%, 0.15);
    --shadow-glow-cta: 0 0 30px -5px hsla(142, 60%, 45%, 0.3);

    --gradient-gold: linear-gradient(135deg, hsl(42, 78%, 55%), hsl(42, 85%, 40%));
    --gradient-dark: linear-gradient(180deg, hsl(220, 20%, 7%), hsl(220, 18%, 10%));
    --gradient-card: linear-gradient(145deg, hsl(220, 16%, 12%), hsl(220, 18%, 9%));
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
}

@layer utilities {
  .text-gold-gradient {
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .border-gold-subtle {
    border-color: hsla(42, 78%, 55%, 0.15);
  }

  .bg-surface-elevated {
    background-color: hsl(var(--surface-elevated));
  }

  .bg-gradient-card {
    background: var(--gradient-card);
  }

  .shadow-premium {
    box-shadow: var(--shadow-premium);
  }

  .shadow-card {
    box-shadow: var(--shadow-card);
  }

  .shadow-glow-gold {
    box-shadow: var(--shadow-glow-gold);
  }

  .shadow-glow-cta {
    box-shadow: var(--shadow-glow-cta);
  }

  .divider-gold {
    height: 2px;
    background: var(--gradient-gold);
    opacity: 0.4;
  }
}
