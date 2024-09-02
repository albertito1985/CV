import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './acordeon.css';

const AccordionDemo = ({changeImage}) => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible onValueChange={changeImage}>
    <Accordion.Item className="AccordionItem"  value="item-1" >
      <AccordionTrigger >Education</AccordionTrigger>
      <AccordionContent>I am a cognitive scientist from Linköpings Universitet. This means that I exploit the cognitive capacity of a target audience to design technological solutions tailored to maximize their specific experience.</AccordionContent>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Personality</AccordionTrigger>
      <AccordionContent>
        <ul>
            <li>
            Creative
            </li>
            <li>
            Responsible
            </li>
            <li>
            Receptive for other’s perspectives
            </li>
            <li>
            Curious
            </li>
            <li>
            A team player
            </li>
        </ul>
      </AccordionContent>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem"  value="item-3" >
      <AccordionTrigger >Languages</AccordionTrigger>
      <AccordionContent>
        <ul>
          <li>
            Spanish (mother tongue)
          </li>
          <li>
            English (advanced)
          </li>
          <li>
            Swedish (advanced)
          </li>
        </ul>
      </AccordionContent>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem"  value="item-4" >
      <AccordionTrigger >About me</AccordionTrigger>
      <AccordionContent><>I was born in Peru and moved to Sweden at 21. Now I live with my family in Åkersberga, Stockholm, where I enjoy spending time with them, reading, playing padel and football.<br/><br/>As a designer my favourite style is the client's style since I feel it is important to reflect the client brand's personality and not mine.</></AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) =>(
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default AccordionDemo;