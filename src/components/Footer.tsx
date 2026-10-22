import { FloralDivider, Heart } from "@/components/ornaments";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative px-5 pt-6 pb-12 text-center">
      <FloralDivider className="mx-auto mb-5 h-8 w-56" />
      <p className="font-script flex items-center justify-center gap-2 text-2xl text-maroon">
        {site.footer}
        <Heart className="h-4 w-4" color="#e38aa0" />
      </p>
    </footer>
  );
}
