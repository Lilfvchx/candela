import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/stylesmod.css";

import { Box } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
//top: '0'

//npm install @react-icons/all-files --save
export default function Roadmap() {
  return (
    <VerticalTimeline className={"roadmap"}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        contentArrowStyle={{ borderRight: "15px solid  #FFFFFF" }}
        date="2020 - presente"
        iconStyle={{
          background: "#FFFFFF",
          color: "#210039",
          alignItems: "center",
        }}
        boxShadow="4px 2px 0px 5px #ddd"
        icon={<MdWork />}
      >
        <Box
          as="h3"
          className="vertical-timeline-element-title"
          sx={{
            ".vertical-timeline-element--workhover &": {
              color: "#210039",
            },
          }}
        >
          Lic en composicion coreografica
        </Box>
        <h4 className="vertical-timeline-element-subtitle">UNA</h4>
        <p>
          Licenciatura en composición coreográfica, mención danza. Universidad
          Nacional de las Artes.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        contentArrowStyle={{ borderRight: "15px solid  #FFFFFF" }}
        date="2020 agosto - 2020 octubre"
        iconStyle={{
          background: "#FFFFFF",
          color: "#210039",
          alignItems: "center",
        }}
        boxShadow="4px 2px 0px 5px #ddd"
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Clases online de Gaga
        </h3>
        <h4 className="vertical-timeline-element-subtitle">online</h4>
        <p>clases online de Gaga. Dirección Ohad Naharin.</p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        contentArrowStyle={{ borderRight: "15px solid  #FFFFFF" }}
        date="2020 junio - 2020 julio"
        iconStyle={{
          background: "#FFFFFF",
          color: "#210039",
          alignItems: "center",
        }}
        boxShadow="4px 2px 0px 5px #ddd"
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Clases de verano online
        </h3>
        <h4 className="vertical-timeline-element-subtitle">online</h4>
        <p>Clases de verano online en la Universidad de Point Park.</p>
      </VerticalTimelineElement> */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        boxShadow="7px 1px 0px 2px #ddd"
        date="2019 - presente"
        iconStyle={{ background: "white", color: "#210039" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Proyecto Ginastera</h3>
        <h4 className="vertical-timeline-element-subtitle">CABA</h4>
        <p>Proyecto Ginastera. Dirección Florencia González.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        boxShadow="7px 1px 0px 2px #ddd"
        date="2019 - 2019"
        iconStyle={{ background: "white", color: "#210039" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Compañía Qamkunapah.
        </h3>
        <h4 className="vertical-timeline-element-subtitle">CABA</h4>
        <p>Compañía Qamkunapah. Dirección Jonatan Moya.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        boxShadow="7px 1px 0px 2px #ddd"
        date="2019 - 2019"
        iconStyle={{ background: "#ffff", color: "#210039" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Fundación Julio Bocca.
        </h3>
        <h4 className="vertical-timeline-element-subtitle">CABA</h4>
        <p>Beca 100% ENPB.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        boxShadow="7px 1px 0px 2px #ddd"
        date="2018-2019"
        iconStyle={{ background: "white", color: "##210039" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Estudio Alba Serra</h3>
        <h4 className="vertical-timeline-element-subtitle">CABA</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        boxShadow="7px 1px 0px 2px #ddd"
        date="2017"
        iconStyle={{ background: "white", color: "##210039" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Junior Artist</h3>
        <h4 className="vertical-timeline-element-subtitle">NY</h4>
        <p>Junior Artist en Ajkun Ballet Theatre. Dirección Chiara Ajkun.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        boxShadow="7px 1px 0px 2px #ddd"
        date="2016"
        iconStyle={{ background: "white", color: "#210039" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Beca para summer intensive
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Junior Artist en Ajkun Ballet
        </h4>
        <p>
          2016 beca para Summer Intensive de Ajkun Ballet Theatre. Dirección
          Chiara Ajkun.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#210039", color: "#FFFFFF" }}
        boxShadow="7px 1px 0px 2px #ddd"
        date="2014-2016"
        iconStyle={{ background: "white", color: "#210039" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Ballet Clasico</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Compañia de ballet Clasico
        </h4>
        <p>Compañía de ballet clásico de María Elena Astrova.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
//GAGA, san juan si, pointpark no. Videos, si. Facebook no, insta si. Drive compa etc relevante.
