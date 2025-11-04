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
    <section class="col-[full] grid grid-cols-subgrid text-white">
      <article class="col-[content]">
        <header className="grid grid-cols-[1fr_3fr_1fr] items-center justify-between text-[1.3rem]">
          <div>
            <FaApple size={40} />
          </div>
          <div className="flex items-center justify-evenly">
            <p>Mac</p>
            <p>iPhone</p>
            <p>iPad</p>
            <p>iWatch</p>
            <p>Support</p>
          </div>
          <div className="flex justify-end gap-4">
            <Image src={Search} alt="Apple logo" width={20} height={20} />
            <Image src={ShoppingBag} alt="Apple logo" width={20} height={20} />
          </div>
        </header>
        <div class="mt-8 grid grid-cols-[1.6fr_1fr_0.1fr] items-center">
          <div>
            <h1 className="text-[5rem] font-bold">
              The Perfect Moment{" "}
              <span className="font-thin">Between Past And Future.</span>
            </h1>
          </div>
          <div>
            <Image src={selectedImage} alt="watch" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <WatchTypeButton
              color="bg-[#404354] border border-[#353745] hover:scale-110 transition-transform duration-300"
              label="Navy"
              onSelect={() => setSelectedImage(Navy)}
              isActive={selectedImage === Navy}
            />
            <WatchTypeButton
              color="bg-[#6addcc] border border-[#5dc1b2] hover:scale-110 transition-transform duration-300"
              label="Mint"
              onSelect={() => setSelectedImage(Mint)}
              isActive={selectedImage === Mint}
            />
            <WatchTypeButton
              color="bg-[#f9cdc4] border border-[#d2ada5] hover:scale-110 transition-transform duration-300"
              label="Ocean"
              onSelect={() => setSelectedImage(Ocean)}
              isActive={selectedImage === Ocean}
            />
          </div>
        </div>
        <button className="-mt-20 rounded-[50px] border-4 border-white bg-transparent px-20 py-4 text-[1.6rem] text-white hover:cursor-pointer hover:bg-white hover:text-[#b6ccda]">
          Buy Now
        </button>
        <div className="grid grid-cols-[3fr_2fr]">
          <div className="flex items-center justify-start gap-2">
            &larr;
            <p>1</p>
            &rarr;
          </div>
          <div className="flex items-center">
            <div className="flex gap-16">
              <figure className="relative w-[100px] hover:cursor-pointer">
                <div
                  className="absolute top-12 -left-2 -z-10 h-[65px] w-[120px] rounded-xl border border-white/20"
                  style={{ backgroundColor: "#40435469" }}
                />
                <WatchTypes
                  src={Navy}
                  alt="Navy watch"
                  onClick={() => setSelectedImage(Navy)}
                  isActive={selectedImage === Navy}
                  className="h-auto w-[100px] object-contain transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>

              <figure className="relative w-[100px] hover:cursor-pointer">
                <div
                  className="absolute top-12 -left-2 -z-10 h-[65px] w-[120px] rounded-xl border border-white/20"
                  style={{ backgroundColor: "#6addccc5" }}
                />
                <WatchTypes
                  src={Mint}
                  alt="Mint watch"
                  onClick={() => setSelectedImage(Mint)}
                  isActive={selectedImage === Mint}
                  className="h-auto w-[100px] object-contain transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>

              <figure className="relative w-[100px] hover:cursor-pointer">
                <div
                  className="absolute top-12 -left-2 -z-10 h-[65px] w-[120px] rounded-xl border border-white/20"
                  style={{ backgroundColor: "#f9cdc475" }}
                />
                <WatchTypes
                  src={Ocean}
                  alt="Ocean watch"
                  onClick={() => setSelectedImage(Ocean)}
                  isActive={selectedImage === Ocean}
                  className="h-auto w-[100px] object-contain transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DummyComponent;
