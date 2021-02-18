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
        .dev-wrapper .dev-content h2 {
            color: #fff;
            font-size: 16px;
            margin-bottom: 20px;
        }
        .dev-wrapper .dev-content img {
            max-width: 100%;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="dev-wrapper">
        <div class="dev-content">
        <h2>{{$news->title}}</h2>
        <img src="{{ Voyager::image( $news->image ) }}" alt="">
        {!!nl2br($news->description)!!}
        </div>
    </div>
</body>
</html>