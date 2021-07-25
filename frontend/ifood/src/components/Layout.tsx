import React from "react";
import { useHistory } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
  functions?: any;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const history = useHistory();

  return (
    <>
      <div className="flex h-screen flex-col bg-gray-50 items-center w-screen">
        <div className="h-5/6 flex flex-col">{children}</div>
        <div className="flex w-screen justify-around bg-gray-300 fixed insert-x-0 bottom-0 p-2 pb-6 h-1/6 max-h-24">
          <div
            className="flex flex-col items-center"
            onClick={() => {
              history.push("/");
            }}
          >
            <img
              alt="Restaurantes"
              src="/images/restaurant.png"
              className="h-7"
            />
            <p>Restaurantes</p>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => {
              history.push("/cesta");
            }}
          >
            <img
              alt="Restaurantes"
              src="/images/shopping-basket.png"
              className="h-7"
            />
            <p>Cesta</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
