import React from 'react'
import styled from 'styled-components';

const FAQ = () => {
  return (
    <>
      <h1>Frequently Requested Information</h1>
      <br/>
      <ul>
        {faqs.map((faq, idx) =>
          <>
            <QA key={idx} qa={faq} />
            {idx !== faqs.length - 1 && <hr/>}
          </>
        )}
      </ul>
      <br/>
      </>
  )
}

export default FAQ;

interface IQA {
  question: string;
  answer: string;
}

const QA = ({qa}: {qa: IQA}) => {
  return (
    <QA_LI>
      <h3>{qa.question}</h3>
      <p>- {qa.answer}</p>
    </QA_LI>
  );
}

const QA_LI = styled.li`
  list-style: none;
  > h3{
    font-size: 1.6em;
  }
  > p{
    font-size: 1.2em;
    text-indent: 40px;
  }
`;

const faqs: IQA[] = [
  {
    question: "What is the voltage of power outlets in Taniti?",
    answer: "Power outlets are 120 volts (the same as in the United States).",
  },
  {
    question: "Are there any restrictions on the sale or service of alcohol in Taniti?",
    answer: "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.",
  },
  {
    question: "What is the legal drinking age in Taniti, and how strictly is it enforced?",
    answer: "The drinking age on Taniti is 18, and it is not strictly enforced.",
  },
  {
    question: "How widely is English spoken in Taniti?",
    answer: "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by older residents.",
  },
  {
    question: "What healthcare facilities are available in Taniti, and do they cater to non-native speakers?",
    answer: "There is one hospital and several clinics. The hospital has many multilingual employees.",
  },
  {
    question: "How common is violent crime in Taniti, and what type of petty crimes should visitors be aware of?",
    answer: "Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.",
  },
  {
    question: "What should visitors know about national holidays and the availability of services in Taniti?",
    answer: "Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.",
  },
  {
    question: "What currency is used in Taniti, and are there other payment options available?",
    answer: "Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.",
  }
]