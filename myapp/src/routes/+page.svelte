<script>
  export let data;

  const member = data.member;
  console.log(member);

  let flipped = false;

  function toggleFlip() {
    flipped = !flipped;
  }
</script>

<!-- Front card-face -->
<div class="card-container">
  <div class="card {flipped ? 'flipped' : ''}">
    <!-- FRONT -->
    <div class="card-face front">
      <button class="git-button">View my <em>github</em> profile</button>
      <div class="text-front">
        <p class="hero-text">My <em>name</em> is</p>
        <h1 class="main-title">{member?.name || "Member Name"}</h1>
        <p class="second-hero-text">
          Read more about me by <strong>flipping</strong> this card with the
          <em>button</em> below :)
        </p>
      </div>
      <button class="flip-button" on:click={toggleFlip}
        >Flip to <em>back</em></button
      >
      <img
        class="member-mugshot"
        src="/me.png"
        alt={member?.name || "Member"}
      />
    </div>

    <!-- Back card-face -->
    <div class="card-face back">
      <h2 class="back-title">Read more <em>about me</em> below...</h2>
      <div class="notes">
        <div class="note">
          <h3 class="sub-title">Title</h3>
          <p class="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="note">
          <h3 class="sub-title">Title</h3>
          <p class="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="note">
          <h3 class="sub-title">Title</h3>
          <p class="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="note">
          <h3 class="sub-title">Title</h3>
          <p class="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <button class="flip-button" on:click={toggleFlip}
        >Flip to <em>front</em></button
      >
    </div>
  </div>
</div>

<!-- Styling card-face-front -->
<style>
  /* Card container */
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    perspective: 1000px;
  }

  /* Card base */
  .card {
    width: 100%;
    min-height: 650px;
    max-height: 90vh;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  /* Flipped state */
  .flipped {
    transform: rotateY(180deg);
  }

  /* Card faces */
  .card-face {
    position: absolute;
    width: -webkit-fill-available;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: var(--br-button);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: var(--box-shadow);
  }

  .front {
    background-color: var(--primary-bg-color);
    text-align: center;
  }

  .back {
    background-color: var(--secondary-bg-color);
    transform: rotateY(180deg);
  }

  /* Buttons */
  .git-button,
  .flip-button {
    font-family: var(--site-font);
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-radius: var(--br-button);
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem auto;
    width: fit-content;
  }

  .git-button {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }

  .flip-button {
    background: var(--primary-color);
    color: var(--primary-text-font);
    font-weight: 400;
  }

  /* Front text */
  .hero-text {
    font-family: var(--site-font);
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 100;
    margin: 0;
  }

  .main-title {
    font-family: var(--header-font);
    font-size: 2.5rem;
    margin: 1rem 0;
    font-weight: 400;
    transform: rotate(0deg);
  }

  .second-hero-text {
    font-family: var(--site-font);
    font-size: 1rem;
    font-weight: 100;
    margin: 0.5rem auto;
    max-width: 14rem;
    line-height: 1.4;
    text-align: center;
  }

  .second-hero-text strong {
    font-weight: 700;
  }

  /* Mugshot altijd onderaan en gecentreerd */
  .member-mugshot {
    width: 100%;
    max-width: 150px;
    height: auto;
    object-fit: cover;
    margin-top: 1rem;
    align-self: center;
    border-radius: var(--br-button);
  }

  /* Styling back card-face */
  .back-title {
    text-align: center;
    margin: 1rem 0;
    font-family: var(--site-font);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 100;
  }

  /* Notes grid */
  .notes {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
  }

  .note {
    padding: 1rem;
    border-radius: var(--br-note);
    box-shadow: var(--box-shadow);
    font-size: 1rem;
  }

  .sub-title {
    font-family: var(--header-font);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    letter-spacing: 1.5px;
  }

  .info-text {
    font-family: var(--site-font);
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  /* Notes backgrounds */
  .note:nth-child(1) {
    background-color: #f7f1dd;
  }
  .note:nth-child(2) {
    background-color: #f9dce6;
  }
  .note:nth-child(3) {
    background-color: #d6e2dd;
  }
  .note:nth-child(4) {
    background-color: #e0d6c0;
  }

  @media (min-width: 501px) {
    .main-title {
      font-size: 3.5rem;
      transform: rotate(350deg);
    }
    .second-hero-text {
      max-width: 17rem;
      font-size: 1.2rem;
    }
    .member-mugshot {
      max-width: 150px;
    }
    .notes {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
    }
  }
</style>
