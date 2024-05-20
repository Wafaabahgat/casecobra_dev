import { FC } from "react";
import User_riew from "../User_riew";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import Reviews from "../Reviews";

interface Proposition_sectionProps {}

const Proposition_section: FC<Proposition_sectionProps> = () => {
  return (
    <section className="bg-slate-100 grainy-dark py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            What our
            <span className="relative px-2">
              customers
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
            </span>
            say
          </h2>
          <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <User_riew
            paragraph="The case feels durable and I even got a compliment on the design.
            Had the case for two and a half months now and"
            span="the image is super clear"
            complete_paragraph=", on the case I had before, the image started fading into yellow-ish
              color after a couple weeks. Love it."
            S_img="/users/user-1.png"
            name="Jonathan"
          />
          <User_riew
            paragraph="I usually keep my phone together with my keys in my pocket
              and that led to some pretty heavy scratchmarks on all of my
              last phone cases. This one, besides a barely noticeable
              scratch on the corner,"
            span="looks brand new after about half a year"
            complete_paragraph=". I dig it."
            S_img="/users/user-4.jpg"
            name="Josh"
          />
        </div>
      </MaxWidthWrapper>

      <div className="pt-16">
        <Reviews />
      </div>
    </section>
  );
};

export default Proposition_section;
