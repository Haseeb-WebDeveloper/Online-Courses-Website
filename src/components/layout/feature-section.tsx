import { FeatureSteps } from "../feature-section";


const features = [
    { 
      step: 'Step 1', 
      title: 'Step-by-Step Training',
      content: 'No vague theory, only actionable strategies', 
      image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Step 2',
      title: 'Real-World Case Studies',
      content: 'Dive deep into blockchain fundamentals and smart contract development.',
      image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Step 3',
      title: 'Exclusive Strategies',
      content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
      image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
    },
  ]

export default function featuresSection(){
    return(
        <>
        <FeatureSteps 
        features={features}
        title="What You Get Inside My Courses"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
        </>
    )
}