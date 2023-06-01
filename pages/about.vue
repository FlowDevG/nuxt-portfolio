<template>
  <section>
  <BaseSectionWrapper class="text-gray-600">
    <div class="container mx-auto px-10 py-24 flex flex-wrap">
      <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-color dark:text-secondary-color lg:w-1/3 lg:mb-0 mb-4">About Me</h1>
      <p v-if="locale == 'en'" class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Hello, I'm <strong class="text-xl">George Kourtis</strong>, a passionate and dedicated front-end developer based in Greece. With three years of experience in the field, I have honed my skills in JavaScript, HTML, CSS, WordPress, and Vue.js.</p>
      <p v-else class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Γεια σας, είμαι ο <strong class="text-xl">Γιώργος Κούρτης</strong>, ένας παθιασμένος και αφοσιωμένος front-end developer με βάση την Ελλάδα. Με τρία χρόνια εμπειρίας στον τομέα, έχω καλλιεργήσει τις δεξιότητές μου σε JavaScript, HTML, CSS, WordPress και Vue.js.</p>
    </div>
    <div v-if="locale == 'en'">
      <div class="text-lg flex flex-col">
        <p>From a young age, I developed a deep fascination for the world of web development, and I've been fortunate enough to turn my passion into a rewarding career. I thrive on the ever-evolving nature of technology and love being at the forefront of innovation.</p>
        <br />
        <p>My journey as a developer has allowed me to work on various projects, where I've had the opportunity to collaborate with talented individuals and contribute to the creation of seamless, user-centric web experiences. I firmly believe that the combination of aesthetic design and efficient functionality is key to creating impactful and engaging websites.</p>
        <br />
        <p>In my work, I strive for excellence, paying meticulous attention to detail while ensuring the highest quality of code. I enjoy the challenge of finding elegant solutions to complex problems and take pride in delivering clean and maintainable code.</p>
        <br />
        <p>One aspect that sets me apart is my dedication to continuous learning. In this ever-changing industry, I'm committed to staying up to date with the latest trends, frameworks, and best practices. This mindset empowers me to provide innovative solutions that not only meet but exceed client expectations.</p>
        <br />
        <p>Outside of coding, you'll find me exploring new technologies, attending meetups, and actively participating in online communities. I strongly believe in the power of collaboration and value opportunities to learn from and share knowledge with fellow developers.</p>
        <br />
        <p>I am excited about the possibilities that lie ahead and look forward to connecting with like-minded professionals and potential collaborators. If you're interested in working together or have any questions, please don't hesitate to get in touch.</p>
        <br />
        <p>Thank you for taking the time to visit my portfolio page.</p>
        <br />
        <br />
        <br />
        <strong class="text-3xl">Let's create remarkable digital experiences together!</strong>
      </div>
    </div>
    <div v-else>
      <div class="text-lg flex flex-col">
        <p>Από μικρή ηλικία, αναπτύχθηκε μέσα μου μια βαθιά αντίληψη για τον κόσμο της ανάπτυξης ιστού και είμαι τυχερός που κατάφερα να μετατρέψω το πάθος μου σε μια ανταμοιβαία καριέρα. Απολαμβάνω τη δυναμική φύση της τεχνολογίας και απολαμβάνω να βρίσκομαι στην πρωτοπορία της καινοτομίας.</p>
        <br />
        <p>Το ταξίδι μου ως προγραμματιστή μου έχει επιτρέψει να εργαστώ σε διάφορα projects, όπου είχα την ευκαιρία να συνεργαστώ με ταλαντούχα άτομα και να συμβάλω στη δημιουργία αρμονικών και χρήσιμων εμπειριών στον ιστό.</p>
        <br />
        <p>Πιστεύω ακράδαντα ότι η συνδυασμένη αισθητική σχεδίαση και η αποτελεσματική λειτουργικότητα αποτελούν το κλειδί για τη δημιουργία επιδραστικών και συναρπαστικών ιστοσελίδων.</p>
        <br />
        <p>Στο έργο μου, προσπαθώ για την αρτιότητα, δίνοντας προσεκτική προσοχή στη λεπτομέρεια, ενώ εξασφαλίζω την υψηλότερη ποιότητα του κώδικα. Απολαμβάνω την πρόκληση να βρίσκω κομψές λύσεις για πολύπλοκα προβλήματα και είμαι περήφανος που παρέχω καθαρό και συντηρήσιμο κώδικα.</p>
        <br />
        <p>Ένας παράγοντας που με ξεχωρίζει είναι η αφοσίωσή μου στη συνεχή μάθηση. Σε αυτόν τον αλλοίωτο κλάδο, είμαι δεσμευμένος να είμαι ενημερωμένος για τις τελευταίες τάσεις, πλαίσια εργασίας και βέλτιστες πρακτικές. Αυτή η νοοτροπία με ενδυναμώνει να παρέχω καινοτόμες λύσεις που όχι μόνο ανταποκρίνονται, αλλά υπερβαίνουν τις προσδοκίες των πελατών.</p>
        <br />
        <p>Εκτός από τον κώδικα, με βρίσκεις να εξερευνώ νέες τεχνολογίες, να παρευρίσκμαι σε συναντήσεις (meetups) και να συμμετέχω ενεργά σε online κοινότητες. Πιστεύω ακράδαντα στη δύναμη της συνεργασίας και αξίζω τις ευκαιρίες για να μάθω από άλλους προγραμματιστές και να μοιραστώ τις γνώσεις μου μαζί τους.</p>
        <br />
        <p>Είμαι ενθουσιασμένος για τις δυνατότητες που κρύβονται μπροστά μας και ανυπομονώ να συνδεθώ με επαγγελματίες με παρόμοια πάθη και δυναμική. Εάν ενδιαφέρεστε για συνεργασία ή έχετε οποιεσδήποτε ερωτήσεις, μην διστάσετε να επικοινωνήσετε μαζί μου.</p>
        <br />
        <p>Σας ευχαριστώ που αφιερώσατε χρόνο για να επισκεφθείτε τη σελίδα μου στο πορτφόλιο.</p>
        <br />
        <br />
        <br />
        <strong class="text-3xl">Ας δημιουργήσουμε αξιοσημείωτες ψηφιακές εμπειρίες μαζί!</strong>
      </div>
    </div>
    </div>
  </BaseSectionWrapper>

  <div class="bg-custom-black dark:bg-custom-white justify-center">
    <Newsletter />
  </div>
</section>
</template>

<script setup>

// Middleware

definePageMeta({
  middleware: ["is-user-authenticated"]
})

const { t, locale } = useI18n();

useHead({
  title: t("pageMeta.about")
});

</script>

<style scoped>
</style>