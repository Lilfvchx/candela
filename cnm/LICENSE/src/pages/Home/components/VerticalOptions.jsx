import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../../styles/stylesmod.css";
import { BsFillFilePersonFill } from "react-icons/bs";
import {Link} from "react-router-dom";
//npm install @react-icons/all-files --save
export default function VerticalOptions() {
  return (
    
    <VerticalTimeline className="roadmap">
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        contentArrowStyle={{ borderRight: "15px solid  #FFFFFF" }}
        iconStyle={{
          background: "#FFFFFF",
          color: "#210039",
          alignItems: "center",
        }}
        boxShadow="4px 2px 0px 5px #ddd"
        icon={<BsFillFilePersonFill />}
      >
      <Link to={"/aboutme"}>
        <h3 className="vertical-timeline-element-title">
          About me
        </h3>
        </Link>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        contentArrowStyle={{ borderRight: "15px solid  #FFFFFF" }}
        iconStyle={{
          background: "#FFFFFF",
          color: "#210039",
          alignItems: "center",
        }}
        boxShadow="4px 2px 0px 5px #ddd"
        icon={<BsFillFilePersonFill />}
      >
      <Link to={"/obras"}>
        <h3 className="vertical-timeline-element-title">
          Obras en que participe
        </h3>
        </Link>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        contentArrowStyle={{ borderRight: "15px solid  #FFFFFF" }}
        iconStyle={{
          background: "#FFFFFF",
          color: "#210039",
          alignItems: "center",
        }}
        boxShadow="4px 2px 0px 5px #ddd"
        icon={<BsFillFilePersonFill />}
      >
      <Link to={"/formacion"}>
        <h1 className="vertical-timeline-element-title">Resumen sobre mi formacion profesional</h1>
        </Link>
      </VerticalTimelineElement>

      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work--last"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        contentArrowStyle={{ borderRight: "15px solid  #FFFFFF" }}
        iconStyle={{
          background: "#FFFFFF",
          color: "#210039",
          alignItems: "center",
        }}
        boxShadow="4px 2px 0px 5px #ddd"
        icon={<BsFillFilePersonFill />}
      >
        <h3 className="vertical-timeline-element-title">
          Redes sociales y contacto
        </h3>
      </VerticalTimelineElement> */}
    </VerticalTimeline>
  );
}
