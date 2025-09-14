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

