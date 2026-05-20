document.addEventListener(
  "DOMContentLoaded",
  () => {

    const cookieBanner =
      document.getElementById("cookieBanner");

    const cookieAccept =
      document.getElementById("cookieAccept");

    const cookieReject =
      document.getElementById("cookieReject");

      if (
        !cookieBanner ||
        !cookieAccept ||
        !cookieReject
      ) return;

    /* =========================
       CHECK STORAGE
    ========================== */

    if (
      localStorage.getItem(
        "bwd-cookie-consent"
      )
    ) {
      cookieBanner.classList.add("hidden");
    }

    /* =========================
       ACCEPT
    ========================== */

    cookieAccept.addEventListener(
      "click",
      () => {

        localStorage.setItem(
          "bwd-cookie-consent",
          "accepted"
        );

        cookieBanner.classList.add("hidden");

      }
    );

    /* =========================
       REJECT
    ========================== */

    cookieReject.addEventListener(
      "click",
      () => {

        localStorage.setItem(
          "bwd-cookie-consent",
          "rejected"
        );

        cookieBanner.classList.add("hidden");

      }
    );

  }
);