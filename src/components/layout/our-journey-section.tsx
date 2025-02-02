import { FeatureSteps } from "@/components/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Step-by-Step Training',
    content: 'No vague theory, only actionable strategies', 
    icon: '💼',
    image: '/step-by-step.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'Real-World Case Studies',
    content: 'Learn from actual businesses making money',
    icon: '📊',
    image: '/Real-World-Case-Studies.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Exclusive Strategies',
    content: 'The same methods I use to generate profits daily',
    icon: '🔥',
    image: '/Strategies.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Community Support',
    content: 'Surround yourself with winners in our private Discord',
    icon: '🎯',
    image: '/Support.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Live Updates',
    content: 'Stay ahead with new insights & strategies',
    icon: '📈',
    image: '/update.avif'
  },
]

export default function OurJourneySection() {
  return (
      <FeatureSteps 
        features={features}
        title="What You Get Inside My Courses"
        autoPlayInterval={4000}
        imageHeight="h-[550px]"
      />
  )
}