import MaskGroup2 from "../components/MaskGroup2";
import MaskGroup1 from "../components/MaskGroup1";
import MaskGroup from "../components/MaskGroup";
import FrameComponent18 from "../components/FrameComponent18";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import "./PackagesPage.css";

const PackagesPage = () => {
  return (
    <div className="packagespage">
      <img className="backdrop-icon" alt="" />
      <main className="path-20-parent">
        <img className="path-20-icon4" alt="" src="/path-20.svg" />
        <img
          className="frame-child28"
          loading="lazy"
          alt=""
          src="/group-37@2x.png"
        />
        <img
          className="mask-group-6"
          loading="lazy"
          alt=""
          src="/mask-group-6@2x.png"
        />
        <MaskGroup2 />
        <img className="mask-group-61" alt="" src="/mask-group-6-1@2x.png" />
        <MaskGroup1 />
        <img className="mask-group-62" alt="" src="/mask-group-6-2@2x.png" />
        <MaskGroup />
        <img
          className="frame-child29"
          loading="lazy"
          alt=""
          src="/group-32@2x.png"
        />
        <img
          className="frame-child30"
          loading="lazy"
          alt=""
          src="/group-33@2x.png"
        />
      </main>
      <FrameComponent18 />
      <div className="packagespage-inner">
        <div className="frame-parent12">
          <GroupComponent1 />
          <GroupComponent />
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
