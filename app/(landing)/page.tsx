import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return(
        <div>
            <div className="h-full ">
                <LandingNavbar/>
                <LandingHero/>
                <LandingContent/>
            </div>
        </div>
    );
}

export default LandingPage;