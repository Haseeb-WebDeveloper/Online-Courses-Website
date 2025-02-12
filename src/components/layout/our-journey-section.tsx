import { FeatureSteps } from "@/components/feature-section"

const features = [
  { 
    step: 'Krok 1', 
    title: 'Krok po kroku',
    content: 'Bez niejasnych teorii, tylko działające strategie', 
    icon: '💼',
    image: '/step-by-step.jpg' 
  },
  { 
    step: 'Krok 2',
    title: 'Rzeczywiste Studie Przypadków',
    content: 'Naucz się od rzeczywistych firm generujących pieniądze',
    icon: '📊',
    image: '/Real-World-Case-Studies.jpg'
  },
  { 
    step: 'Krok 3',
    title: 'Ekskluzywne Strategie',
    content: 'Te same metody, które używam do generowania zysków każdego dnia',
    icon: '🔥',
    image: '/Strategies.jpg'
  },
  { 
    step: 'Krok 4',
    title: 'Wsparcie Społeczności',
    content: 'Otocz się zwycięzcami w naszej prywatnej grupie Discord',
    icon: '🎯',
    image: '/Support.jpg'
  },
  { 
    step: 'Krok 5',
    title: 'Aktualizacje na żywo',
    content: 'Zostawaj na bieżąco z nowymi wglądemmi & strategiami',
    icon: '📈',
    image: '/update.avif'
  },
]


export default function OurJourneySection() {
  return (
      <FeatureSteps 
        features={features}
        title="Co otrzymasz w moich kursach"
        autoPlayInterval={4000}
        imageHeight="h-[550px]"
      />
  )
}