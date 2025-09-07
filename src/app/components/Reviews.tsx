"use client";
import {InfiniteMovingCards} from "./ui/infinite-moving-cards";


export default function Reviews() {
    const reviews = [
        {
            quote: "These shoes are a game-changer! The comfort and style are unmatched.",
            name: "Alice Johnson",
            title: "Fashion Blogger",
        },
        {
            quote: "I get compliments every time I wear my Vellano sneakers. Truly unique designs!",
            name: "Mark Thompson",
            title: "Graphic Designer",
        },
        {
            quote: "The craftsmanship is evident in every stitch. Worth every penny!",
            name: "Sophie Lee",
            title: "Entrepreneur",
        },
        {
            quote: "Finally, sneakers that combine luxury and everyday wearability.",
            name: "David Kim",
            title: "Tech Executive",
        },
        {
            quote: "Vellano shoes have elevated my wardrobe. I can't recommend them enough!",
            name: "Emma Wilson",
            title: "Stylist",
        },

        {
            quote: "The attention to detail and quality is exceptional. I'm a loyal customer now.",
            name: "Liam Brown",
            title: "Photographer",

        },
    ];
    return (
        <section className="py-20 bg-black text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
            <InfiniteMovingCards items={reviews} />
        </section>
    );
}

