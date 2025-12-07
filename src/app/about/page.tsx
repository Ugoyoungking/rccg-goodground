import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/placeholder-images';
import { BookOpen, Church, Cloud, Flame, Heart, Rocket, Target, Users } from 'lucide-react';

const leaders = [
  { name: 'Pastor John Adebayo', title: 'Senior Pastor', imageId: 'leader-1' },
  { name: 'Pastor Jane Doe', title: 'Associate Pastor', imageId: 'leader-2' },
  { name: 'Michael Chen', title: 'Worship Leader', imageId: 'leader-3' },
  { name: 'Sarah Wilson', title: 'Youth Pastor', imageId: 'leader-4' },
];

const coreBeliefs = [
    { id: 'belief-1', title: 'The Scriptures', content: 'We believe the Bible is the inspired, infallible, and authoritative Word of God.', icon: <BookOpen className="h-8 w-8 text-primary" /> },
    { id: 'belief-2', title: 'The Trinity', content: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.', icon: <Users className="h-8 w-8 text-primary" />},
    { id: 'belief-3', title: 'Salvation', content: 'We believe that salvation is a gift from God, received by grace through faith in Jesus Christ.', icon: <Heart className="h-8 w-8 text-primary" /> },
    { id: 'belief-4', title: 'The Church', content: 'We believe the Church is the body of Christ, a community of believers united in faith and love.', icon: <Church className="h-8 w-8 text-primary" /> },
    { id: 'belief-5', title: 'Christ\'s Return', content: 'We believe in the personal return of our Lord Jesus Christ to judge the living and the dead.', icon: <Cloud className="h-8 w-8 text-primary" /> },
    { id: 'belief-6', title: 'Empowerment', content: 'We believe in the present ministry of the Holy Spirit, who empowers believers for godly living.', icon: <Flame className="h-8 w-8 text-primary" /> },
];

const historyMilestones = [
  { year: '1995', title: 'A Humble Beginning', description: 'Our church began as a small prayer group of five families meeting in a living room, with a shared vision to create a place of worship and community.', imageId: 'history-1' },
  { year: '2005', title: 'Growing Together', description: 'After outgrowing several rented spaces, our congregation came together to purchase and build our first permanent church home.', imageId: 'history-2' },
  { year: '2015', title: 'Expanding Our Reach', description: 'We launched our first community outreach programs, including a food pantry and after-school tutoring, extending our ministry beyond our walls.', imageId: 'history-3' },
  { year: 'Today', title: 'A Thriving Community', description: 'We continue to grow in faith and number, serving our city and sharing the love of Christ with a vision for the future.', imageId: 'history-4' },
];

export default function AboutPage() {
    const heroImage = placeholderImages.find(img => img.id === 'about-hero');

    const galleryImages = [
        placeholderImages.find(img => img.id === 'gallery-1'),
        placeholderImages.find(img => img.id === 'gallery-2'),
        placeholderImages.find(img => img.id === 'gallery-3'),
        placeholderImages.find(img => img.id === 'gallery-4'),
    ].filter(Boolean);

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-primary/20">
                {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} fill objectFit="cover" className="opacity-20" data-ai-hint={heroImage.imageHint} />}
                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">About Our Church</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
                        A family dedicated to knowing God and making Him known.
                    </p>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Purpose</h2>
                        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">Guided by faith, we are committed to a clear mission and a hopeful vision for the future.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="bg-accent/20 p-3 rounded-full"><Target className="h-8 w-8 text-accent" /></div>
                                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground flex-grow">
                                <p>To lead people into a growing relationship with Jesus Christ by creating environments where people are encouraged and equipped to pursue intimacy with God, community with insiders, and influence with outsiders.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="bg-accent/20 p-3 rounded-full"><Rocket className="h-8 w-8 text-accent" /></div>
                                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground flex-grow">
                                <p>To be a beacon of hope and a center for spiritual growth in our community and beyond, where lives are transformed by the power of the Gospel and people are empowered to fulfill their God-given destiny.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Beliefs */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Beliefs</h2>
                        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">The foundational truths of our faith that guide everything we do.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreBeliefs.map((belief) => (
                             <Card key={belief.id} className="text-center p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow">
                                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                                     {belief.icon}
                                 </div>
                                 <CardTitle className="text-xl mb-2">{belief.title}</CardTitle>
                                 <CardDescription>{belief.content}</CardDescription>
                             </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* Our History */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey of Faith</h2>
                        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">Tracing the steps of God's faithfulness throughout our history.</p>
                    </div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
                        {historyMilestones.map((milestone, index) => {
                            const historyImage = placeholderImages.find(img => img.id === milestone.imageId);
                            const isOdd = index % 2 !== 0;
                            return (
                                <div key={milestone.year} className={`mb-12 flex flex-col md:flex-row items-center gap-8 ${isOdd ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="md:w-5/12">
                                        {historyImage && (
                                            <Image src={historyImage.imageUrl} alt={milestone.title} width={500} height={350} className="rounded-lg shadow-xl" data-ai-hint={historyImage.imageHint} />
                                        )}
                                    </div>
                                    <div className="relative md:w-1/12 flex justify-center">
                                        <div className="h-6 w-6 rounded-full bg-primary ring-8 ring-secondary z-10" />
                                    </div>
                                    <div className="md:w-5/12">
                                        <Card className="shadow-lg">
                                            <CardHeader>
                                                <p className="text-accent font-bold">{milestone.year}</p>
                                                <CardTitle className="text-2xl">{milestone.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Leadership Team */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Leaders</h2>
                        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">Servant leaders dedicated to guiding our church family.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leaders.map((leader) => {
                            const leaderImage = placeholderImages.find(img => img.id === leader.imageId);
                            return (
                                <Card key={leader.name} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                    <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-accent">
                                        {leaderImage && <AvatarImage src={leaderImage.imageUrl} alt={leader.name} data-ai-hint={leaderImage.imageHint}/>}
                                        <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl text-primary">{leader.name}</CardTitle>
                                    <CardDescription className="text-accent font-semibold">{leader.title}</CardDescription>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Home</h2>
                        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into our facilities and the spaces where we worship, learn, and grow together.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => image && (
                            <div key={index} className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg group">
                                <Image src={image.imageUrl} alt={image.description} fill objectFit="cover" className="transform group-hover:scale-110 transition-transform duration-300" data-ai-hint={image.imageHint} />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
