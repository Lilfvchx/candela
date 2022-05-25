import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/stylesmod.css";
import { BsFillFilePersonFill } from "react-icons/bs";



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
        <h3 className="vertical-timeline-element-title">
          Informacion sobre mi formacion semiprofesional
        </h3>
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
        <h3 className="vertical-timeline-element-title">
          Obras en que participe
        </h3>
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
        <h1 className="vertical-timeline-element-title">Resumen sobre mi</h1>
      </VerticalTimelineElement>

      <VerticalTimelineElement
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
        <h3 className="vertical-timeline-element-title">Redes sociales y contacto</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
