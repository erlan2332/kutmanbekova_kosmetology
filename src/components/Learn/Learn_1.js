import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Learn_2 = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
          <span className="fs-4">Курс косметологии</span>
        </a>
      </header>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Эстетист</h2>
            <p>Курс доступен для лиц от 16 лет и старше без обязательного медицинского образования. Курс для эстетистов продолжительностью 20 дней включает получение двух сертификатов на русском и английском языках.</p>
            <button className="btn btn-outline-light" type="button" onClick={handleShow1}>
              Подробнее
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>профессиональный</h2>
            <p>Для участия необходимо иметь медицинское образование и достигнуть возраста 16 лет и старше. В процессе обучения студенты получат два сертификата. В ходе курса предусмотрена практика в объеме 90% и теоретические занятия в объеме 10%.</p>
            <button className="btn btn-outline-secondary" type="button" onClick={handleShow2}>
              Подробнее
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно для первой кнопки */}
      <Modal show={showModal1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Эстетист</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Обучение продолжительностью 20 дней, еженедельно посещение 5 раз в неделю на протяжении 6 часов в день. Для участия не требуется медицинское образование. Во время обучения предоставляются учебные материалы, а также модели для практики. Форма не выдается.</p>
          <p> Стоимость обучения - 20.000 сом.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>Закрыть</Button>
        </Modal.Footer>
      </Modal>

      {/* Модальное окно для второй кнопки */}
      <Modal show={showModal2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Профессиональный</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Для инъекционных процедур необходимо медицинское образование. Обучение длится 35 дней, при посещении 5 раз в неделю и продолжительность занятий по 6 часов в день.</p>
          <p>Стоимость курса составляет - 80.000 сом.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Learn_2;
