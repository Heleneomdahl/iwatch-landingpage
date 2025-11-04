"use client"; // fordi vi bruger state

import { useState } from "react";
import Image from "next/image";

import Navy from "../../../public/img/navy.png";
import Mint from "../../../public/img/mint.png";
import Ocean from "../../../public/img/ocean.png";
import { FaApple } from "react-icons/fa";
import Search from "../../../public/icon/search.png";
import ShoppingBag from "../../../public/icon/shopping-bag.png";
import WatchTypeButton from "./WatchTypeButton";
import WatchTypes from "./WatchTypes";

const DummyComponent = () => {
  const [selectedImage, setSelectedImage] = useState(Navy);
  return (
    <section class="grid">
      <article>
        <header>
          <div>
            <FaApple size={40} />
          </div>
          <div class="flex-header">
            <p>Mac</p>
            <p>iPhone</p>
            <p>iPad</p>
            <p>iWatch</p>
            <p>Support</p>
          </div>
          <div class="flex-header2">
            <Image src={Search} alt="Apple logo" width={20} height={20} />
            <Image src={ShoppingBag} alt="Apple logo" width={20} height={20} />
          </div>
        </header>
        <div class="flex-box">
          <div>
            <h1>
              The Perfect Moment <span>Between Past And Future.</span>
            </h1>
          </div>
          <div>
            <Image src={selectedImage} alt="watch" />
          </div>
          <div className="color-buttons">
            <WatchTypeButton
              color="navy"
              label="Navy"
              onSelect={() => setSelectedImage(Navy)}
              isActive={selectedImage === Navy}
            />
            <WatchTypeButton
              color="mint"
              label="Mint"
              onSelect={() => setSelectedImage(Mint)}
              isActive={selectedImage === Mint}
            />
            <WatchTypeButton
              color="ocean"
              label="Ocean"
              onSelect={() => setSelectedImage(Ocean)}
              isActive={selectedImage === Ocean}
            />
          </div>
        </div>
        <button class="buy">Buy Now</button>
        <div class="flex-btm">
          <div class="flex-arr">
            &larr;
            <p>1</p>
            &rarr;
          </div>
          <div className="grid-img">
            <figure style={{ "--bg": "#40435469" }}>
              <WatchTypes
                src={Navy}
                alt="Navy watch"
                onClick={() => setSelectedImage(Navy)}
                isActive={selectedImage === Navy}
              />
            </figure>
            <figure style={{ "--bg": "#6addccc5" }}>
              <WatchTypes
                src={Mint}
                alt="Mint watch"
                onClick={() => setSelectedImage(Mint)}
                isActive={selectedImage === Mint}
              />
            </figure>
            <figure style={{ "--bg": "#f9cdc475" }}>
              <WatchTypes
                src={Ocean}
                alt="Ocean watch"
                onClick={() => setSelectedImage(Ocean)}
                isActive={selectedImage === Ocean}
              />
            </figure>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DummyComponent;
