import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-b-[1px] border-gray-800 border-dashed bg-[#141a31] bg-opacity-70 backdrop-blur-sm"
    >
      <div className="2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 min-h-[80vh] pb-10 pt-10">
        <Fade direction="down">
          <h1 className="text-[50px] md:text-[75px] text-white text-center font-extrabold mt-10 uppercase">
            {" "}
            ABout us
          </h1>
          <p className="text-2xl text-center text-green-500 -mt-[70px] font-bold uppercase">
            About us
          </p>
        </Fade>
        <Fade>
          <div className="grid w-full grid-cols-1 gap-10 mt-20 md:grid-cols-2">
            <div className="rounded-lg">
              <h1 className="text-2xl font-bold text-center text-white uppercase md:text-3xl">
                WHAT IS Relayer?
              </h1>
              <p className="text-xl font-normal text-gray-400">
                Welcome to Relayer, the platform for autonomous agent identities on the blockchain. Our project consists of 10,000 unique agent NFTs built on the ERC-8004 Identity Registry standard, each representing a distinct autonomous agent with verifiable identity and capabilities.
              </p>
              <br></br>
              <p className="text-xl font-normal text-gray-400">
                Each agent NFT is crafted with unique traits and characteristics, making them one-of-a-kind digital identities. These NFTs serve as the foundation for a decentralized ecosystem of autonomous agents, enabling trustless interactions across platforms.
              </p>
              <br></br>
              <p className="text-xl font-normal text-gray-400">
                We invite you to explore our collection and discover the agent identities that resonate with you. Whether you're building with agents, collecting NFTs, or exploring the future of decentralized AI, Relayer offers a gateway into the autonomous agent economy.
              </p>
              <br></br>
              <p className="text-xl font-normal text-gray-400">
                At Relayer, we are committed to building the infrastructure for the future of autonomous agents. By leveraging the ERC-8004 standard, we ensure interoperability and trust within the agent ecosystem.
              </p>
            </div>
            <div className="flex flex-col rounded-md gap-7">
              <div className="flex flex-col gap-4 border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] p-3 rounded-md">
                <p className="text-3xl font-bold text-white">The Mint?</p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Minting will be open for all at 0.001 ETH per agent. Whitelist members get 20% discount (0.0008 ETH). Collect all 10,000 unique autonomous agent identities powered by ERC-8004 standard.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-[1px] border-[#14c2a3] shadow-2xl shadow-[#22B78F80] p-3 rounded-md">
                <p className="text-3xl font-bold text-white">
                  What are the benefits?
                </p>
                <p className="text-lg font-normal text-gray-400">
                  By minting and holding one of our 10,000 unique agent identities, you'll receive the following benefits:<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  ERC-8004 compliant identity registry - Standard for autonomous agents<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Verifiable agent identities with unique traits and capabilities<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Interoperable with other ERC-8004 platforms and marketplaces<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Full ownership and transferability of your agent NFTs<br></br>
                </p>
                <p className="text-lg font-normal text-red-400 md:text-2xl">
                  Join the future of decentralized autonomous agents and Web3 infrastructure.
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="absolute top-0 bottom-0 md:min-h-screen lg:min-h-[120vh] xl:min-h-[60vh] min-h-[120vh] area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
