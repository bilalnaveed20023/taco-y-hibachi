import SaucePicker from "./SaucePicker";
import Reveal from "./Reveal";

export default function Fusion() {
  return (
    <section className="fusion" id="fusion">
      <div className="wrap fusion-grid">
        <Reveal className="fusion-copy">
          <p className="mono eyebrow">Tacos y hibachi</p>
          <h2 className="stencil h2">
            Two menus.<br />
            One window.
          </h2>
          <p className="body-lg">
            Street tacos for one hand. Hibachi when you’re properly hungry. It all comes off the same flat-top, and the sauces work on both.
          </p>
          <p className="body-lg dim">Salsa roja, salsa verde or yum yum? Reviewers keep bringing up all three.</p>
        </Reveal>
        <Reveal className="fusion-picker" delay={120}>
          <SaucePicker />
        </Reveal>
      </div>
    </section>
  );
}
