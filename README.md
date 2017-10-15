# QTGATE @OPN client and server - Open Source
[![Build Status](https://travis-ci.org/QTGate/QTGate-Desktop-Client.svg?branch=master)](https://travis-ci.org/QTGate/QTGate-Desktop-Client)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-blue.svg)](https://gitter.im/QTGate/Lobby)

## Description 概要

This is QTGATE @OPN module include server and client
@OPN is a new anonymity network technolgy from QTGATE Systems Canada Inc, it use email IMAP protocol to make a virtual tunnel that exchanges packets between clients and servers. Client soft support proxy server. [QTGATE](https://www.qtgate.com).

這是@OPN客戶端和服務器端源程序
@OPN是加拿大QTGATE系統公司開發的一種匿名通讯手段，它可以通过Email的IMAP协议建立一个虚拟的专用通道，连接客户端和代理服务器，客户端和代理服务器彼此不用知道相互的IP地址，通过共用一个Email账号进行数据交换，建立一个私密的网络安全环境。

@OPNの端末とサーバ通信用モジュールです.  
@OPNとは、カナダQTGATEシステム株式会社開発した匿名通信技術です。EmailのIMAPプロトコルを使用して、端末とサーバの間に、仮想のネットワークトンネルを構築してIP不要なネットワーク通信ができます。

![http protocol](/resources/vpn.email11.jpg?raw=true)

## INSTALL

npm i qtgate_at_opn
npm i

## server

npm run server

## client

npm run client

## Notice 注意事項 

This version support http & https proxy only
當前版本只對應 http 和 https proxy
このパージョンは　http と https proxy　しか対応していますので、ご注意してください。

## License 版權 

Copyright (c) QTGate Systems Inc. All rights reserved.

Licensed under the [MIT](LICENSE) License.

The MIT License (MIT)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.