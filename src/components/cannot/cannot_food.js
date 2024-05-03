import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CannotFood = () => {
    // Создаем состояние для отображения/скрытия модального окна
    const [showModal, setShowModal] = useState(false);

    // Функция для открытия модального окна
    const openModal = () => {
        setShowModal(true);
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="col-lg-8 mx-auto p-4 py-md-5">
                <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                    <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                        <span className="fs-4">Питание-диета</span>
                    </a>
                </header>
                <main>
                    <h1 className="text-body-emphasis">Соблюдение диеты</h1>
                    <p className="fs-5 col-md-8">Правильное питание не только благоприятно влияет на общее здоровье организма, но также оказывает непосредственное воздействие на состояние кожи, волос и ногтей. В мире косметологии, соблюдение диеты становится важным фактором для достижения и поддержания красивого и здорового внешнего вида.</p>

                    <div className="mb-5">
                        {/* При клике на кнопку вызываем функцию openModal */}
                        <button onClick={openModal} className="btn btn-primary btn-lg px-4">Подробнее</button>
                    </div>
                    <hr className="col-3 col-md-2 mb-5" />
                </main>
            </div>

            {/* Модальное окно */}
            {showModal &&
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Правильное питание</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                 - Избегайте газированных напитков. <br />
                                 - Избегайте фастфуда. <br />
                                 - Избегайте молочных продуктов. <br />
                                 - Ограничьте потребление сладкого. <br />
                                 - Избегайте острого. <br />
                                 - Ограничьте потребление чипсов. <br />
                                 - Не курите. <br />
                                 - Не употребляйте алкоголь. <br />
                                 - Избегайте жирной пищи. <br />
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* Затемнение фона */}
            {showModal &&
                <div className="modal-backdrop fade show"></div>
            }
        </>
    );
};

export default CannotFood;
