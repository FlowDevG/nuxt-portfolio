<template>

  <section>

  <BaseSectionWrapper class="text-gray-600">
    <div class="container mx-auto px-10 py-24 flex flex-wrap">
      <div class="flex w-full mb-20 flex-wrap">
        <h1 class="sm:text-3xl text-2xl font-medium title-font bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-color dark:text-secondary-color lg:w-1/3 lg:mb-0 mb-4">{{ $t(`privacy-policy.title`) }}</h1>
        <p v-if="locale == 'en'" class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> Effective Date: <span class="text-secondary-color">2023-05-21</span> till now.. <br /> <br />
          This Privacy Policy explains how this website collects, uses, stores, and discloses personal information when you visit our portfolio website, gkourtis-portfolio.com We are committed to protecting your privacy and maintaining the security of your personal information.
        </p>
        <p v-else class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> Ημερομηνία ισχύος: <span class="text-secondary-color">2023-05-21</span> εώς τώρα <br /> <br />
          Αυτή η Πολιτική Απορρήτου εξηγεί πώς αυτός ο ιστότοπος συλλέγει, χρησιμοποιεί, αποθηκεύει και αποκαλύπτει προσωπικές πληροφορίες όταν επισκέπτεστε τον ιστότοπο του χαρτοφυλακίου μας, gkourtis-portfolio.com Δεσμευόμαστε να προστατεύουμε το απόρρητό σας και να διατηρούμε την ασφάλεια των προσωπικών σας πληροφοριών.
        </p>
      </div>
      <div>
        <section
         v-if="locale == 'en'"
         class="text-lg flex flex-col">
          <h2 class="text-2xl font-bold underline">Information We Collect</h2>
          <br />
          <strong class="block">1.1 Personal Information</strong>
          <br />
          When you visit our Website, we may collect certain personal information that you voluntarily provide, such as your name, email address, phone number, and any other information you choose to share through our contact forms or when subscribing to our newsletters.
          <br />
          <strong class="block mt-5">1.2 Usage Data</strong>
          <br />
          In addition to personal information, we may collect non-personal information about your interaction with our Website. This includes your IP address, browser type, device information, pages visited, and other usage data. We use this information to analyze trends, administer the site, track user movements, and gather broad demographic information for statistical purposes.

          <h2 class="my-10 text-2xl font-bold underline">Use of Information</h2>
          <strong>2.1 Personal Information</strong>
          <br />
          We use the personal information you provide to:
          <br />

          Respond to your inquiries, requests, or messages;
          Provide you with information about our services, projects, or collaborations;
          Customize your experience on the Website;
          Send you occasional newsletters or updates (with your consent);
          Improve our Website and services.
          <strong class="block my-5">2.2 Usage Data</strong>
          We may use non-personal information, such as usage data, to analyze and improve the functionality and performance of our Website. This helps us enhance the user experience and optimize the content we provide.

          <strong class="block my-5">Data Security</strong>
          <!-- <br /> -->
          We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no data transmission or storage system can guarantee complete security. If you have any concerns about the security of your personal information, please contact us immediately.

          <strong class="block my-5">Third-Party Disclosure</strong>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with trusted third-party service providers who assist us in operating our Website or providing services to you. These providers are obligated to maintain the confidentiality of your information.

          <strong class="block my-5">Cookies and Tracking Technologies</strong>
          Our Website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files that are placed on your device to collect information about how you interact with our Website. You can modify your browser settings to refuse cookies or receive notifications when a cookie is being sent. However, please note that disabling cookies may impact certain features or functionality of the Website.

          <strong class="block my-5">Third-Party Links</strong>
          Our Website may contain links to third-party websites or services. Please note that we have no control over the content or privacy practices of these external sites. We encourage you to review the privacy policies of those third parties before providing any personal information.

          <strong class="block my-5">Changes to this Privacy Policy</strong>
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on the Website. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information.

          <strong class="block my-5">Contact Us</strong>
          If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us using the contact information provided on the Website.
        </section>
        <section
         v-else
         class="text-lg flex flex-col">
          <h2 class="text-2xl font-bold underline">Πληροφορίες που συλλέγουμε..</h2>
          <br />
          <strong class="block">1.1 Προσωπικά δεδομένα</strong>
          <br />
          Όταν επισκέπτεστε τον Ιστότοπό μας, ενδέχεται να συλλέξουμε ορισμένες προσωπικές πληροφορίες που οικειοθελώς παρέχετε, όπως το όνομά σας, τη διεύθυνση email, τον αριθμό τηλεφώνου σας και οποιαδήποτε άλλη πληροφορία επιλέγετε να μοιραστείτε μέσω των φορμών επικοινωνίας μας ή κατά την εγγραφή σας στα ενημερωτικά δελτία μας.
          <br />
          <strong class="block mt-5">1.2 Δεδομένα Χρήσης</strong>
          <br />
          Εκτός από τις προσωπικές πληροφορίες, ενδέχεται να συλλέξουμε μη προσωπικές πληροφορίες σχετικά με την αλληλεπίδρασή σας με τον Ιστότοπό μας. Αυτό περιλαμβάνει τη διεύθυνση IP, τον τύπο του προγράμματος περιήγησης, τις πληροφορίες συσκευής, τις σελίδες που επισκεφτήκατε και άλλα δεδομένα χρήσης. Χρησιμοποιούμε αυτές τις πληροφορίες για την ανάλυση των τάσεων, τη διαχείριση του ιστότοπου, την παρακολούθηση των κινήσεων των χρηστών και τη συλλογή ευρειών δημογραφικών πληροφοριών για στατιστικούς σκοπούς.

          <h2 class="my-10 text-2xl font-bold underline">Χρήση πληροφοριών</h2>
          <strong>2.1 Προσωπικά δεδομένα</strong>
          <br />
          Χρησιμοποιούμε τις προσωπικές πληροφορίες που παρέχετε για:
          <br />

          Απαντήστε στα ερωτήματα, τα αιτήματα ή τα μηνύματά σας.
          Σας παρέχουμε πληροφορίες σχετικά με τις υπηρεσίες, τα έργα ή τις συνεργασίες μας.
          Προσαρμόστε την εμπειρία σας στον ιστότοπο.
          Σας στέλνουμε περιστασιακά ενημερωτικά δελτία ή ενημερώσεις (με τη συγκατάθεσή σας).
          Βελτιώστε τον Ιστότοπο και τις υπηρεσίες μας.
          <strong class="block my-5">2.2 Δεδομένα χρήσης</strong>
          Ενδέχεται να χρησιμοποιήσουμε μη προσωπικές πληροφορίες, όπως δεδομένα χρήσης, για να αναλύσουμε και να βελτιώσουμε τη λειτουργικότητα και την απόδοση του ιστότοπού μας. Αυτό μας βοηθά να βελτιώσουμε την εμπειρία χρήστη και να βελτιστοποιήσουμε το περιεχόμενο που παρέχουμε.
          <strong class="block my-5">Προστασία δεδομένων</strong>
          <!-- <br /> -->
          Λαμβάνουμε τα κατάλληλα μέτρα για την προστασία των προσωπικών σας δεδομένων από μη εξουσιοδοτημένη πρόσβαση, αποκάλυψη, τροποποίηση ή καταστροφή. Ωστόσο, έχετε υπόψη σας ότι κανένα σύστημα μετάδοσης ή αποθήκευσης δεδομένων δεν μπορεί να εγγυηθεί την πλήρη ασφάλεια. Εάν έχετε οποιεσδήποτε ανησυχίες σχετικά με την ασφάλεια των προσωπικών σας στοιχείων, επικοινωνήστε αμέσως μαζί μας.
          <strong class="block my-5">Αποκάλυψη τρίτων</strong>
          Δεν πουλάμε, εμπορευόμαστε ή με άλλο τρόπο μεταβιβάζουμε τα προσωπικά σας στοιχεία σε τρίτους χωρίς τη συγκατάθεσή σας. Ωστόσο, ενδέχεται να μοιραστούμε τις πληροφορίες σας με αξιόπιστους τρίτους παρόχους υπηρεσιών που μας βοηθούν στη λειτουργία του ιστότοπού μας ή στην παροχή υπηρεσιών σε εσάς. Αυτοί οι πάροχοι είναι υποχρεωμένοι να διατηρούν το απόρρητο των πληροφοριών σας.
          <strong class="block my-5">Cookies και τεχνολογίες παρακολούθησης</strong>
          Ο ιστότοπός μας μπορεί να χρησιμοποιεί cookies και παρόμοιες τεχνολογίες παρακολούθησης για να βελτιώσει την εμπειρία περιήγησής σας. Τα cookies είναι μικρά αρχεία που τοποθετούνται στη συσκευή σας για τη συλλογή πληροφοριών σχετικά με τον τρόπο αλληλεπίδρασης με τον Ιστότοπό μας. Μπορείτε να τροποποιήσετε τις ρυθμίσεις του προγράμματος περιήγησής σας για να αρνηθείτε τα cookies ή να λαμβάνετε ειδοποιήσεις όταν αποστέλλεται ένα cookie. Ωστόσο, λάβετε υπόψη ότι η απενεργοποίηση των cookies μπορεί να επηρεάσει ορισμένες λειτουργίες ή λειτουργίες του ιστότοπου.

          <strong class="block my-5">Σύνδεσμοι τρίτων</strong>
          Ο ιστότοπός μας μπορεί να περιέχει συνδέσμους προς ιστότοπους ή υπηρεσίες τρίτων. Λάβετε υπόψη ότι δεν έχουμε κανέναν έλεγχο του περιεχομένου ή των πρακτικών απορρήτου αυτών των εξωτερικών τοποθεσιών. Σας ενθαρρύνουμε να διαβάσετε τις πολιτικές απορρήτου αυτών των τρίτων μερών προτού παρέχετε οποιαδήποτε προσωπική πληροφορία.
          <strong class="block my-5">Αλλαγές σε αυτήν την Πολιτική Απορρήτου</strong>
          Διατηρούμε το δικαίωμα να ενημερώσουμε ή να τροποποιήσουμε αυτήν την Πολιτική Απορρήτου ανά πάσα στιγμή. Οποιεσδήποτε αλλαγές θα ισχύουν αμέσως μετά τη δημοσίευση της αναθεωρημένης πολιτικής στον Ιστότοπο. Σας ενθαρρύνουμε να ελέγχετε περιοδικά αυτήν την Πολιτική Απορρήτου για να είστε ενημερωμένοι σχετικά με τον τρόπο με τον οποίο συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας στοιχεία.
          <strong class="block my-5">Επικοινωνία</strong>
          Εάν έχετε οποιεσδήποτε ερωτήσεις, ανησυχίες ή αιτήματα σχετικά με την παρούσα Πολιτική Απορρήτου ή τον χειρισμό των προσωπικών σας στοιχείων, επικοινωνήστε μαζί μας χρησιμοποιώντας τα στοιχεία επικοινωνίας που παρέχονται στον Ιστότοπο.
        </section>
      </div>
    </div>
  </BaseSectionWrapper>

  <div class="bg-custom-black dark:bg-custom-white">
    <Newsletter />
  </div>

</section>

</template>

<script setup>
 const { locale } = useI18n();

 console.log(locale.value)

</script>

<style lang="scss" scoped>

</style>