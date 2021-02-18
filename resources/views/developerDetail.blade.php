<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Developer</title>
    <style>
        .dev-wrapper {
            max-width: 700px;
            margin: 0 auto;
            background: rgba(76, 99, 82, 0.8);
            position: relative;
            padding: 20px 40px;
        }
        .dev-wrapper .dev-content {
            color: #ffffff;
            font-size: 13px;
            text-align: justify;
        }
    </style>
</head>
<body>
    <div class="dev-wrapper">
        <div class="dev-content">
        {!!nl2br($developer->description)!!}
        </div>
    </div>
</body>
</html>