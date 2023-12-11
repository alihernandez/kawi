import { Metadata } from "next";

export const metadata = {
  title: 'My Page Title',
};

export default function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center w-full max-w-screen-md p-4 rounded-xl">
            <div className="flex flex-col justify-center items-center w-full rounded-xl p-4" id="outterDiv">
              <p>About us..</p>
              <div className="flex justify-center my-2 h-4/5 w-full rounded-lg text-center text-white" id="innerLine">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue. In eu mi bibendum neque egestas congue quisque egestas. Egestas pretium aenean pharetra magna ac placerat vestibulum. Non pulvinar neque laoreet suspendisse. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisl pretium fusce id velit ut. Fringilla ut morbi tincidunt augue. Auctor urna nunc id cursus metus aliquam eleifend mi in. In fermentum posuere urna nec. Quis varius quam quisque id diam vel quam. Id cursus metus aliquam eleifend mi. Non tellus orci ac auctor augue mauris augue neque gravida.
                </p>
              </div>
              <div className="flex justify-center text-center my-2 h-4/6 w-full rounded-lg">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue. In eu mi bibendum neque egestas congue quisque egestas. Egestas pretium aenean pharetra magna ac placerat vestibulum. Non pulvinar neque laoreet suspendisse. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisl pretium fusce id velit ut. Fringilla ut morbi tincidunt augue. Auctor urna nunc id cursus metus aliquam eleifend mi in. In fermentum posuere urna nec. Quis varius quam quisque id diam vel quam. Id cursus metus aliquam eleifend mi. Non tellus orci ac auctor augue mauris augue neque gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}