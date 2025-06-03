import { CompanionCard } from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id="123"
          name="Companion One"
          topic="This is a description of Companion One."
          subject="science"
          duration={45}
          color="ffda6ae"
        />
        <CompanionCard 
          id="456"
          name="Companion One"
          topic="This is a description of Companion Two."
          subject="science"
          duration={45}
          color="blue"
        />
        <CompanionCard 
          id="789"
          name="Companion One"
          topic="This is a description of Companion Three."
          subject="science"
          duration={45}
          color="red"
        />
        
      </section>

      <section className="home-section">
        <CompanionsList 
          title= "Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
