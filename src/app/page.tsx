import CanvasBackground from "@/components/home/canvasAnimation";
import HeadBar from "@/components/home/head/headBar";
import { MsgBox } from "@/components/home/msgBox/msgBox";

export default function Home() {
  return (
    <div>
      <HeadBar />
      <CanvasBackground />
      <MsgBox />
      {/* <PreMarketLoadingPage /> */}
    </div>
  );
}
