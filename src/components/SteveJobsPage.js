import React from 'react';
import './SteveJobsPage.css';
import { Helmet } from 'react-helmet';

const SteveJobsPage = () => {
  return (
    <main id="main">
      <Helmet>
          <title>Steve Jobs</title>
        </Helmet>
      <h1 id="title">Steve Jobs (1955-2011)</h1>
      <h2>One of the most influential entrepreneurs in the field of IT</h2>
      <figure id="img-div">
        <img
          id="image"
          src="https://cdn.britannica.com/04/171104-050-5B714956/Steve-Jobs-iPhone-2010.jpg"
          alt="Steve Jobs demonstrating an iPhone 4"
        />
        <figcaption id="img-caption">
          Steve Jobs happily demonstrating an iPhone 4
        </figcaption>
      </figure>
      <section id="tribute-info">
        <h3>Timeline</h3>
        <ul>
          <li>
            <strong>Feb 1955</strong> - Steve was born in San Francisco, the son of Abdulfattah Jandali and Joanne Schieble. He is quickly adopted by Paul and Clara Jobs
          </li>
          <li>
            <strong>1969</strong> - Steve Jobs meets Steve Wozniak, 5 years older, through a mutual friend. Woz and Steve share a love of electronics, Bob Dylan, and pranks
          </li>
          <li>
            <strong>Apr 1976</strong> - Apple Computer Inc. is incorporated by Steve Jobs, Steve Wozniak and Ron Wayne
          </li>
          <li>
            <strong>1978</strong> - The Apple II becomes the first mass-market personal computer, with impressive sales around the US. Apple becomes a symbol of the personal computing revolution
          </li>
          <li>
            <strong>Sep 1985</strong> - Steve Jobs resigns from Apple and starts NeXT with five other refugees from Apple. Apple announces it will sue NeXT
          </li>
          <li>
            <strong>Dec 1996</strong> - Apple, which was desperately looking for a modern operating system to buy, eventually buys NeXT for $400 million. Steve Jobs is named "informal adviser" to Apple CEO Gil Amelio
          </li>
          <li>
            <strong>Aug 2011</strong> - Steve Jobs resigns as CEO of Apple, with the words 'I have always said if there ever came a day when I could no longer meet my duties and expectations as Apple's CEO, I would be the first to let you know. Unfortunately, that day has come.' Tim Cook becomes Apple CEO
          </li>
          <li>
            <strong>Oct 2011</strong> - Steve Jobs dies at home, surrounded by his family
          </li>
        </ul>
      </section>
      <blockquote cite="https://stevejobstribute.netlify.app/">
        <p>
          "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."
        </p>
        <cite>--Steve Jobs, CEO, Apple Inc.</cite>
      </blockquote>
      <h3>
        If you have time, you should read more about this incredible human being on his{' '}
        <a
          id="tribute-link"
          href="https://en.wikipedia.org/wiki/Steve_Jobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia entry
        </a>
        .
      </h3>
    </main>
  );
};

export default SteveJobsPage;
