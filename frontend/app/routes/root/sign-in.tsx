import Logo from "~/components/Logo";
import { Button } from "~/components/ui/button";

const SignIn = () => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex justify-center items-center lg:px-0 px-4">
        <div className="signin-card">
          <header>
            <Logo />
          </header>
          <article>
            <h2 className="p-28-semibold text-dark-100 text-center">
              Start Your Travel Journey
            </h2>

            <p className="p-18-regular text-center text-gray-100 !leading-7">
              Sign in with Google to manage destinations, itineraries, and user
              activity with ease.
            </p>
          </article>
          <Button className="bg-blue-300 !h-11 !w-full hover:bg-blue-200 cursor-pointer">
            <img
              src="assets/icons/google.svg"
              className="size-5"
              alt="google"
            />
            <span className="text-[14px] md:text-[18px] leading-[14px] md:leading-[16px] font-semibold text-white">
              Sign in with Google
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
