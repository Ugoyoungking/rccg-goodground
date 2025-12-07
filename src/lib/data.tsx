import React from 'react';
import { Users, HeartHandshake, Music, GraduationCap, Smile, Globe, Sparkles, Handshake } from 'lucide-react';

export const ministries = [
  {
    name: "Men's Ministry",
    slug: 'men',
    description: 'Building strong men of faith and character to lead their families and communities.',
    icon: <Users className="h-10 w-10 text-primary" />,
    imageId: 'ministry-men',
  },
  {
    name: "Women's Ministry",
    slug: 'women',
    description: 'Empowering women to live out their God-given purpose with grace and strength.',
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    imageId: 'ministry-women',
  },
  {
    name: 'Youth & Young Adults',
    slug: 'youth',
    description: 'Raising the next generation of leaders through dynamic worship, teaching, and fellowship.',
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    imageId: 'ministry-youth',
  },
  {
    name: "Children's Church",
    slug: 'children',
    description: "Providing a fun and safe environment for children to learn about God's love.",
    icon: <Smile className="h-10 w-10 text-primary" />,
    imageId: 'ministry-children',
  },
  {
    name: 'Worship & Music',
    slug: 'music',
    description: "Leading the congregation into God's presence through praise and worship.",
    icon: <Music className="h-10 w-10 text-primary" />,
    imageId: 'ministry-music',
  },
  {
    name: 'Outreach & Missions',
    slug: 'outreach',
    description: 'Sharing the love of Christ with our local community and the world through service and support.',
    icon: <Globe className="h-10 w-10 text-primary" />,
    imageId: 'ministry-outreach',
  },
  {
    name: 'Prayer Team',
    slug: 'prayer',
    description: 'A dedicated team that intercedes for the church, community, and individual needs.',
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    imageId: 'ministry-prayer',
  },
  {
    name: 'Hospitality Team',
    slug: 'hospitality',
    description: 'Creating a welcoming atmosphere for every person who walks through our doors.',
    icon: <Handshake className="h-10 w-10 text-primary" />,
    imageId: 'ministry-hospitality',
  }
];

export const events = [
  {
    id: 1,
    title: 'Annual Leadership Conference',
    date: 'October 15-17, 2024',
    time: '9:00 AM - 5:00 PM Daily',
    location: 'Main Sanctuary',
    type: 'Conference',
    imageId: 'event-conference',
  },
  {
    id: 2,
    title: 'Summer Community Picnic',
    date: 'July 20, 2024',
    time: '12:00 PM - 4:00 PM',
    location: 'City Park',
    type: 'Community',
    imageId: 'event-picnic',
  },
  {
    id: 3,
    title: 'Christmas Gospel Concert',
    date: 'December 22, 2024',
    time: '6:00 PM',
    location: 'Main Sanctuary',
    type: 'Concert',
    imageId: 'event-concert',
  },
  {
    id: 4,
    title: 'Youth Summer Camp',
    date: 'August 5-9, 2024',
    time: 'All Day',
    location: 'Mountain Retreat Center',
    type: 'Youth Event',
    imageId: 'ministry-youth',
  },
];

export const sermons = [
  {
    id: 'the-power-of-faith',
    title: 'The Unshakeable Power of Faith',
    speaker: 'Pastor John Adebayo',
    date: 'June 23, 2024',
    series: 'Foundations of Faith',
    imageId: 'sermon-faith',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    scriptures: ['Hebrews 11:1', 'Mark 11:22-24', 'Romans 10:17'],
    notes: `Faith is the substance of things hoped for, the evidence of things not seen. This sermon explores the practical application of faith in our daily lives.
    Key Points:
    1. Understanding what faith is and what it is not.
    2. How to grow your faith through the Word of God.
    3. Activating your faith to overcome life's challenges.`,
    fullText: `Brothers and sisters, I want to talk to you today about something that is the very bedrock of our walk with God. It is a topic so fundamental, yet so often misunderstood. I'm talking about faith. The writer of Hebrews tells us in chapter 11, verse 1, "Now faith is the assurance of things hoped for, the conviction of things not seen." This isn't just wishful thinking. It is a spiritual substance. It's the title deed to what we are believing God for. When you have faith, you hold the evidence of what is not yet visible in the natural realm. Jesus Himself said in Mark 11, "Have faith in God." He goes on to say that if you believe, you can tell a mountain to move and it will obey. This isn't about literally rearranging geography. It's about overcoming the impossible mountains in our lives – the mountains of sickness, of debt, of broken relationships. Faith is the currency of the kingdom. It is how we transact with heaven. So how do we get more of it? Paul tells us in Romans 10:17, "So faith comes from hearing, and hearing through the word of Christ." You cannot grow your faith by passively waiting for it. You must actively feed on the Word of God. The more you hear and meditate on His promises, the more your faith will grow. It is a muscle that strengthens with use. Today, I challenge you to step out. Activate your faith. Don't just be a hearer of the word, but a doer. Take God at His word and watch the mountains in your life begin to move.`
  },
  {
    id: 'amazing-grace',
    title: 'Living in the Fullness of Amazing Grace',
    speaker: 'Pastor Jane Doe',
    date: 'June 16, 2024',
    series: 'The Heart of the Gospel',
    imageId: 'sermon-grace',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    scriptures: ['Ephesians 2:8-9', 'Titus 2:11', '2 Corinthians 12:9'],
    notes: `Grace is more than just unmerited favor; it's the divine empowerment to live a victorious Christian life.
    Key Points:
    1. Saved by Grace: Understanding our salvation is a free gift.
    2. Living by Grace: How God's grace enables us daily.
    3. Sufficient Grace: Finding strength in our moments of weakness.`,
    fullText: `Today we sing about Amazing Grace, but do we truly understand its depth? Ephesians 2:8-9 says, "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." Your salvation is not something you earned. It is a gift, freely given by a loving God. You can never be good enough to deserve it. That's the beauty of grace. But grace doesn't stop at salvation. It's not just a ticket to heaven. Titus 2:11 tells us, "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age." Grace is a teacher. It's a trainer. It's the power of God working in you to transform your character and your conduct. It empowers you to say 'no' to sin and 'yes' to righteousness. And what happens when we are weak? When we fail? The Apostle Paul pleaded with God to remove a 'thorn in his flesh.' God's response in 2 Corinthians 12:9 was, "My grace is sufficient for you, for my power is made perfect in weakness." In your lowest moments, in your deepest struggles, God's grace is not just present; it is sufficient. It is enough. His power shines brightest through your acknowledged weakness. Let us stop trying to earn what is freely given and start living in the empowering reality of His amazing grace.`
  },
  {
    id: 'finding-your-purpose',
    title: 'Discovering Your God-Given Purpose',
    speaker: 'Guest Speaker Michael Chen',
    date: 'June 9, 2024',
    series: 'Kingdom Living',
    imageId: 'sermon-purpose',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    scriptures: ['Jeremiah 29:11', 'Ephesians 2:10', 'Romans 12:6-8'],
    notes: `Every believer has a unique purpose in the kingdom of God. This message will help you discover and walk in it.
    Key Points:
    1. You were created on purpose, for a purpose.
    2. Identifying your spiritual gifts and passions.
    3. Stepping out of your comfort zone to fulfill your calling.`,
    fullText: `Have you ever asked yourself, "Why am I here?" It's one of the most profound questions a person can ask. And the Bible gives us a clear answer. You are not an accident. God told the prophet Jeremiah, "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." Before you were even born, God had a plan and a purpose for your life. Ephesians 2:10 puts it this way: "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them." You are a masterpiece, designed by God Himself for a specific set of tasks. So, how do we find this purpose? A major clue lies in your spiritual gifts. Romans 12:6-8 lists several of them: prophecy, service, teaching, exhortation, contributing, leadership, and mercy. What are you naturally good at that builds up the church? What are you passionate about? Where does your heart break for the needs of others? These are signposts pointing toward your purpose. Finding your purpose is one thing; walking in it is another. It often requires stepping out of your comfort zone. It requires faith. It might not always be easy, but it will always be fulfilling. There is no greater joy than knowing you are doing what you were created to do. I encourage you today, seek God, discover your gifts, and have the courage to walk in the good works He has prepared for you.`
  },
];
