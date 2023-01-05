export const signupHtml = (name: string) => {
  return `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <!--[if gte mso 15]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>*|MC:SUBJECT|*</title>
        <style>
        img {
            -ms-interpolation-mode: bicubic;
        }
        
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        .mceStandardButton,
        .mceStandardButton td,
        .mceStandardButton td a {
            mso-hide: all !important;
        }
        
        p,
        a,
        li,
        td,
        blockquote {
            mso-line-height-rule: exactly;
        }
        
        p,
        a,
        li,
        td,
        body,
        table,
        blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        
        @media only screen and (max-width: 480px) {
            body,
            table,
            td,
            p,
            a,
            li,
            blockquote {
                -webkit-text-size-adjust: none !important;
            }
        }
        
        .mcnPreviewText {
            display: none !important;
        }
        
        .bodyCell {
            margin: 0 auto;
            padding: 0;
            width: 100%;
        }
        
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%;
        }
        
        .ReadMsgBody {
            width: 100%;
        }
        
        .ExternalClass {
            width: 100%;
        }
        
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
        
        body {
            height: 100%;
            margin: 0px;
            padding: 0px;
            width: 100%;
            background: rgb(255, 255, 255);
        }
        
        p {
            margin: 0px;
            padding: 0px;
        }
        
        table {
            border-collapse: collapse;
        }
        
        td,
        p,
        a {
            word-break: break-word;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            display: block;
            margin: 0px;
            padding: 0px;
        }
        
        img,
        a img {
            border: 0px;
            height: auto;
            outline: none;
            text-decoration: none;
        }
        
        li p {
            margin: 0px !important;
        }
        
        @media only screen and (max-width: 480px) {
            body {
                width: 100% !important;
                min-width: 100% !important;
            }
            colgroup {
                display: none;
            }
            img {
                height: auto !important;
            }
            .mceColumn {
                display: block !important;
                width: 100% !important;
            }
            #mceColumnContainer {
                padding-right: 12px !important;
                padding-left: 12px !important;
            }
            .mceText,
            .mceText p {
                font-size: 16px !important;
                line-height: 150% !important;
            }
            h1 {
                font-size: 36px !important;
                line-height: 125% !important;
            }
        }
        
        @media only screen and (max-width: 640px) {
            .mceClusterLayout td {
                padding: 4px !important;
            }
        }
        
        body {
            background-color: rgb(28, 26, 34);
        }
        
        .mceText h1,
        .mceText h2,
        .mceText h3,
        .mceText h4 {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }
        
        .mceText,
        .mceLabel {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }
        
        .mceText h1,
        .mceText h2,
        .mceText h3,
        .mceText h4 {
            color: rgb(0, 0, 0);
        }
        
        .mceText,
        .mceLabel {
            color: rgb(0, 0, 0);
        }
        
        .mceText a {
            color: rgb(242, 192, 130);
        }
        
        .mceSpacing-24 h1 {
            margin-bottom: 24px;
        }
        
        .mceSpacing-24 h1:last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 p {
            margin-bottom: 24px;
        }
        
        .mceSpacing-24 p:last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 ul {
            margin-bottom: 24px;
        }
        
        .mceSpacing-24 ul:last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 label {
            margin-bottom: 24px;
        }
        
        .mceSpacing-24 input {
            margin-bottom: 24px;
        }
        
        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }
        
        .mceSpacing-24 .mceInput + .mceErrorMessage {
            margin-top: -12px;
        }
        
        .mceSpacing-12 label {
            margin-bottom: 12px;
        }
        
        .mceSpacing-12 input {
            margin-bottom: 12px;
        }
        
        .mceSpacing-12 .mceInput + .mceErrorMessage {
            margin-top: -6px;
        }
        
        .mceSpacing-60 label {
            margin-bottom: 60px;
        }
        
        .mceSpacing-60 input {
            margin-bottom: 60px;
        }
        
        .mceSpacing-60 .mceInput + .mceErrorMessage {
            margin-top: -30px;
        }
        
        .mceInput {
            background-color: transparent;
            border: 2px solid rgb(208, 208, 208);
            width: 60%;
            color: rgb(77, 77, 77);
            display: block;
        }
        
        .mceInput[type="radio"],
        .mceInput[type="checkbox"] {
            float: left;
            margin-right: 12px;
            display: inline;
            width: auto !important;
        }
        
        .mceLabel > .mceInput {
            margin-bottom: 0px;
            margin-top: 2px;
        }
        
        .mceLabel {
            display: block;
        }
        
        .mceText h1 {
            font-size: 31.248px;
            font-weight: 700;
        }
        
        @media only screen and (max-width: 480px) {
            .mobileClass-870 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }
            .mobileClass-870 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }
            .mobileClass-870 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }
        }
        
        @media only screen and (min-width: 481px) and (max-width: 768px) {}
        </style>
    </head>
    
    <body>
        <!--*|IF:MC_PREVIEW_TEXT|*-->
        <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
        <!--<![endif]-->
        <!--*|END:IF|*-->
        <center>
            <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="background-color: rgb(28, 26, 34);">
                <tbody>
                    <tr>
                        <td id="root" class="bodyCell" align="center" valign="top">
                            <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]-->
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px" role="presentation">
                                <tbody>
                                    <tr>
                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="mceSection" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed" role="presentation">
                                                <colgroup>
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                    <col span="1" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <td style="background-color:#1c1a22;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:24px" class="mceColumn" valign="top" colspan="12" width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent" role="presentation">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="min-width:100%;border-top:20px solid transparent" valign="top"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceSpacing-24" id="mceColumnContainer" align="center" valign="top"><img width="114.53298497713914" style="width:114.53298497713914px;height:auto;max-width:100%;display:block" alt="Logo" src="https://dim.mcusercontent.com/cs/f49bd1fad0141a48d999fd47d/images/08e0a28c-d771-9853-af1f-50eb51020410.png?w=115&dpr=2" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent" role="presentation">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="min-width:100%;border-top:20px solid transparent" valign="top"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <div class="mceText" style="font-size:16px;text-align:center;width:100%">
                                                                                <h1 class="last-child"><span style="color:#f2c082;">Career support. Redefined.</span></h1></div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <div class="mceText" style="font-size:16px;text-align:left;width:100%">
                                                                                <p> <span style="color:#ffffff;"> Hey ${name
                                                                                  .split(
                                                                                    " "
                                                                                  )
                                                                                  .join()}, welcome to the first iterations of </span><span style="color:#f2c082;">Nirvaan</span><span style="color:#ffffff;">!</span></p>
                                                                                <p><span style="color:#ffffff;">We are very excited to have you join us on our journey of providing career support to students and working professionals around the globe! <br> <br> Join the communities of your choice, ask a doubt if you have one and take part in discussions!</span></p>
                                                                                <p class="last-child"><span style="color:#ffffff;"> In the next few months, we plan to:</p>
                                                                                <p class="last-child">
                                                                                    <ul><span style="color:#ffffff;">
                                                                                        <li><span style="color:#ffffff;"> bring new features to the forum </span> </li>
                                                                                        <li><span style="color:#ffffff;"> develop new products to improve exploration of careers, and </span> </li>
                                                                                        <li><span style="color:#ffffff;"> engage and build communities to improve discussions around careers </span> </li>
                                                                                    </ul> </span> 
                                                                                    </p>
                                                                                <p><span style="color:#ffffff;"> As we build out the early versions of this product, we'd appreciate feedback from you - the first users - personally. We'd love to have you in <a href="https://chat.whatsapp.com/Gfm7Kz31AveF4oREulxo1z"><span style="color:#f2c082"> this WhatsApp group</span></a> built for this very purpose. </span></p>
                                                                                <p><span style="color:#ffffff;"> Feel free to check out our social media handles below! </span></p>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:transparent;padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent" role="presentation">
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:transparent;padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent" role="presentation">
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:#1c1a22;padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="background-color:#1c1a22;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px" class="mceSection" valign="top">
                                                                                            <table border="0" cellpadding="0" cellspacing="24" width="100%" style="table-layout:fixed" role="presentation">
                                                                                                <colgroup>
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                </colgroup>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="mceColumn" valign="top" colspan="12" width="100%">
                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="mceSpacing-24" id="mceColumnContainer" align="center" valign="top">
                                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="" role="presentation" class="mceClusterLayout">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td style="padding-left:30px;padding-top:0;padding-right:30px" data-breakpoint="870" valign="top" class="mobileClass-870">
                                                                                                                                            <a href="https://www.instagram.com/nirvaan.xyz/" style="display:block" target="_blank"><img width="32" style="border:0;width:32px;height:auto;max-width:100%;display:block" alt="Instagram icon" src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Finstagram-icon-color-40.png?w=32&dpr=2" /></a>
                                                                                                                                        </td>
                                                                                                                                        <td style="padding-left:30px;padding-top:0;padding-right:30px" data-breakpoint="870" valign="top" class="mobileClass-870">
                                                                                                                                            <a href="https://nirvaan.xyz" style="display:block" target="_blank"><img width="32" style="border:0;width:32px;height:auto;max-width:100%;display:block" alt="Website icon" src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Fwebsite-icon-color-40.png?w=32&dpr=2" /></a>
                                                                                                                                        </td>
                                                                                                                                        <td style="padding-left:30px;padding-top:0;padding-right:30px" data-breakpoint="870" valign="top" class="mobileClass-870">
                                                                                                                                            <a href="https://twitter.com/nirvaan_xyz" style="display:block" target="_blank"><img width="32" style="border:0;width:32px;height:auto;max-width:100%;display:block" alt="Twitter icon" src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Ftwitter-icon-color-40.png?w=32&dpr=2" /></a>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceSpacing-24" id="mceColumnContainer" valign="top">
                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" id="section_61253a604d61a9f45a3adc4667a72378">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="mceSection" valign="top">
                                                                                            <table border="0" cellpadding="0" cellspacing="12" width="100%" style="table-layout:fixed" role="presentation">
                                                                                                <colgroup>
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                    <col span="1" />
                                                                                                </colgroup>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0;padding-bottom:0" class="mceColumn" valign="top" colspan="12" width="100%">
                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceSpacing-24" id="mceColumnContainer" align="center" valign="top">
                                                                                                                            <div class="mceText" style="font-size:12px;display:inline-block;color:#ffffff;width:100%">
                                                                                                                                <p class="last-child"><em>Copyright (C) 2022 MentorPlus Private Limited. </em>
                                                                                                                                <br> All rights reserved.	</p>
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td class="mceSpacing-24" id="mceColumnContainer" align="center" valign="top">
                                                                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="mceSection" valign="top">
                                                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed" role="presentation">
                                                                                                                                                <colgroup>
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                    <col span="1" />
                                                                                                                                                </colgroup>
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="mceColumn" valign="top" colspan="12" width="100%">
                                                                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                                                                                                                                <tbody>
                                                                                                                                                                    <tr>
                                                                                                                                                                        <td class="mceSpacing-24" id="mceColumnContainer" align="center" valign="top">
                                                                                                                                                                        </td>
                                                                                                                                                                    </tr>
                                                                                                                                                                </tbody>
                                                                                                                                                            </table>
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>
        </center>
    </body>
    
    </html>`;
};
