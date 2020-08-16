import React from "react";
import styles from "./Navigation.module.css";
const Navigation = (props) => {
  return (
    <div className={styles.container}>
      <div className="row">
        <section className="test col s4 offset-s4">
          <form onSubmit={props.handleSubmit} action="">
            <div class="input-field">
              <input
                placeholder="Rechercher un film"
                onChange={props.handleChange}
                id="first_name2"
                type="text"
                class="validate"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
export default Navigation;
