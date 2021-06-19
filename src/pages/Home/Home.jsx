import styles from "./Home.module.css";
import { Logo } from "../../components/Navbar/Logo";

export const Home = () => {
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2 flex align-center m-h-4">
        <div className={styles.logo__wrapper}>
          <Logo />
        </div>
        <div className="m-h-2">Chassis</div>
      </div>
      <div className="text-bold font-2 m-h-4 m-v-2">
        A UI library of FORMULA
      </div>
      <div className="separator" />
      <div className="para-normal">
        Chassis allows you to design and build web Apps faster by providing a
        range of reusable components.
      </div>
      <div className="para-normal">
        The name Chassis is inspired from the chassis of a motor vehicle. As the
        vehicle is build on top of it&apos;s chassis, web Apps can be build on
        top of this Chassis.
      </div>
      <div className="para-normal">
        To quickly get started, place the following code in the head section of
        your HTML page.
      </div>
      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/PCp45gQMsvhiVEB1xB6G"
          type=""
          className="w-100 h-2"
        />
      </div>
      <div className="para-normal">Made with code💻by Kushank Sriraj.</div>
      <div className="para-normal">Happy building!</div>
      <div className="m-v-2 m-h-4 font-semibold">References</div>
      <ol className="m-h-6 p-h-4">
        <li>SVG Icons :Icons made by Good Ware fromflaticon.com</li>
        <li>Demo images: picsum.photos</li>
        <li>Avatars : from twitter profiles</li>
      </ol>
    </div>
  );
};
