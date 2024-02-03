import React from 'react';
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section= ({ children }) => {
  return (
    <section className={css.section}>
        {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;