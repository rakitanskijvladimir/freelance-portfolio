const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="contact-grid">
          <li className="contact-grid__item contact-grid__item--location">
            <h2 className="title-2">Location</h2>
            <p>Moscow, Russia</p>
          </li>

          <li className="contact-grid__item contact-grid__item--whatsapp">
            <h2 className="title-2">WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">+7 (903) 509-34-25</a>
            </p>
          </li>

          <li className="contact-grid__item contact-grid__item--telegram">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tel:+79051234567">@RakitanskijVladimir</a>
            </p>
          </li>

          <li className="contact-grid__item contact-grid__item--email">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">
                rakitanskijvladimir@yandex.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
