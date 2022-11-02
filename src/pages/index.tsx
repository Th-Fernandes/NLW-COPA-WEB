import Image from "next/image";
import appPreviewImg from "assets/nlw-copa-preview.png";
import logoImg from "assets/logo.svg";
import avatarsImg from "assets/avatars.png";
import checkIconImg from "assets/icon-check.svg";
export default function Home(props: any) {
  return (
    <div className="text-white flex h-screen justify-between items-center max-w-[1124px] mx-auto gap-28">
      <main>
        <Image className="mb-10" src={logoImg} alt="" quality={100} />
        <h1 className="text-5xl font-bold leading-tight mb-10">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="flex items-center gap-2 mb-12">
          <Image src={avatarsImg} alt="" quality={100} />
          <strong className="text-xl">
            <span className="mr-1 text-green">+12.592</span>
            pessoas já estão usando
          </strong>
        </div>

        <form className="flex h-[58px] gap-2 mb-4">
          <input
            className="bg-gray-800 px-6 py-4 w-[306px] rounded text-sm focus:ring-1 focus:ring-yellow-500 outline-none transition-shadow"
            type="text"
            placeholder="Qual nome do seu bolão?"
          />
          <button
            className="bg-yellow-500 px-6 text-black text-sm font-bold rounded"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="flex justify-between pt-10 border-t-2 border-t-gray-500">
          <div className="flex items-center gap-6">
            <Image src={checkIconImg} alt="" quality={100} />
            <div className="flex flex-col">
              <span className="text-bold text-2xl">+2.034</span>
              <span>Bolões criados </span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-500" />

          <div className="flex items-center gap-6 pl-2">
            <Image src={checkIconImg} alt="" quality={100} />
            <div className="flex flex-col">
              <span className="text-bold text-2xl">+2.034</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image src={appPreviewImg} alt="" quality={100} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
