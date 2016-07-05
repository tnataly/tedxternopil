<?php
// configure
$from = 'tedxternopil<contact@tedxternopil.com>';
$sendTo = 'TEDxTernopil team<contact@tedxternopil.com';
$subject = 'New message from tedxternopil.com';
$fields = array('name' => 'Name', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in email
$okMessage = "Дякуємо, ваше повідомлення відправлено успішно. Ми з Вами зв'яжемося найближчим часом";
$errorMessage = 'Трапилась якась прикра помилка. Спробуйте надіслати ще раз пізніше';

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}

echo "<script>
             alert('Дякуємо, ваше повідомлення відправлено успішно. Ми з Вами зв'яжемося найближчим часом');
             window.history.go(-1);
     </script>";

?>
