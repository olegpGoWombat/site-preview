import React from "react"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

import styles from "./styles.module.scss"

const FaqAccordion = () => {
  return (
    <div className={styles["faqAccordion"]}>
      <Accordion allowZeroExpanded preExpanded={["a"]}>
        <AccordionItem uuid="a">
          <AccordionItemHeading>
            <AccordionItemState>
              {({ expanded }) => (
                <AccordionItemButton
                  className={`${styles["accordionButton"]} ${
                    expanded ? styles["expandedButton"] : ""
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing erna in
                  justo?
                </AccordionItemButton>
              )}
            </AccordionItemState>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles["accordionPanel"]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              iaculis non interdum praesent fames turpis elit proin. Sagittis
              mauris et odio elit. Consectetur pretium, felis praesent sit.
              Eleifend viverra tristique interdum viverra lobortis hendrerit sit
              diam. Nec turpis vehicula amet fermentum vestibulum imperdiet
              congue tellus, tristique. Ac urna, commodo in viverra. Fermentum
              varius odio nunc ut sapien sit parturient id. In sed tempus nibh
              in vitae libero. Amet, vel vitae ut id augue pharetra aliquet.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemState>
              {({ expanded }) => (
                <AccordionItemButton
                  className={`${styles["accordionButton"]} ${
                    expanded ? styles["expandedButton"] : ""
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing erna in
                  justo?
                </AccordionItemButton>
              )}
            </AccordionItemState>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles["accordionPanel"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              esse recusandae tempora dicta repellendus ratione eligendi ipsum
              necessitatibus, accusantium laborum neque unde voluptatem quisquam
              nisi placeat suscipit. Aliquam doloremque voluptatibus nostrum,
              adipisci totam ad exercitationem qui. Voluptate ut deleniti totam,
              sapiente libero porro incidunt neque quisquam obcaecati, animi et
              nisi.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemState>
              {({ expanded }) => (
                <AccordionItemButton
                  className={`${styles["accordionButton"]} ${
                    expanded ? styles["expandedButton"] : ""
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing erna in
                  justo?
                </AccordionItemButton>
              )}
            </AccordionItemState>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles["accordionPanel"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              esse recusandae tempora dicta repellendus ratione eligendi ipsum
              necessitatibus, accusantium laborum neque unde voluptatem quisquam
              nisi placeat suscipit. Aliquam doloremque voluptatibus nostrum,
              adipisci totam ad exercitationem qui. Voluptate ut deleniti totam,
              sapiente libero porro incidunt neque quisquam obcaecati, animi et
              nisi.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemState>
              {({ expanded }) => (
                <AccordionItemButton
                  className={`${styles["accordionButton"]} ${
                    expanded ? styles["expandedButton"] : ""
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing erna in
                  justo?
                </AccordionItemButton>
              )}
            </AccordionItemState>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles["accordionPanel"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              esse recusandae tempora dicta repellendus ratione eligendi ipsum
              necessitatibus, accusantium laborum neque unde voluptatem quisquam
              nisi placeat suscipit. Aliquam doloremque voluptatibus nostrum,
              adipisci totam ad exercitationem qui. Voluptate ut deleniti totam,
              sapiente libero porro incidunt neque quisquam obcaecati, animi et
              nisi.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FaqAccordion
