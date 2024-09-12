import "./Modal.css";

export function Modal({ children, show, onClose }) {
  if (show) {
    return (
      <div className="modal-background">
        <section className="modal-main bg-red-500 text-slate-200 text-center rounded-lg">
          {children}
          <button className="close hover:text-slate-400 p-1" type="button" onClick={onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
