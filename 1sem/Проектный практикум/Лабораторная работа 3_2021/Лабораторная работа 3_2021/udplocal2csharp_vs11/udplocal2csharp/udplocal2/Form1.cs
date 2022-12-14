using System;
using System.Text;
using System.Windows.Forms;
using System.Net.Sockets;
using System.Net;
using System.Threading;


///////////////////////////////////////////////////////////////////////////////
//                        www.interestprograms.ru 
//                      исходные коды программ и игр 
//     ОТПРАВКА СООБЩЕНИЙ ПО ПРОТОКОЛУ UDP ЧАСТЬ 2 (подробное описание) 
///////////////////////////////////////////////////////////////////////////////

namespace udplocal2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        
        private void buttonSend_Click(object sender, EventArgs e)
        {
            // Отправляем сообщение и  закрываем udpclient
            UdpClient udp = new UdpClient();
            byte[] message = Encoding.Default.GetBytes(textBoxSend.Text);
            IPEndPoint ep = new IPEndPoint(IPAddress.Parse(textBoxRemote.Text), 15000);
            udp.Send(message, message.Length, ep);
            udp.Close();
        }
 
        private void buttonStart_Click(object sender, EventArgs e)
        {
            // Чтобы наше приложение не заблокировалось,
            // для извлечения сообщений запускаем второй поток.
            ThreadStart tstart = new ThreadStart(Receive);
            workReceive = new Thread(tstart);
            workReceive.Start();
        }

        bool stopReceive = false;
        Thread workReceive = null;
        UdpClient udp = null;
        
        // Функция запускаемая из дополниетльного потока
        void Receive()
        {
            try
            {
                IPEndPoint ep = new IPEndPoint(IPAddress.Parse(textBoxHostAddress.Text), 15000);
                udp = new UdpClient(ep);
                while (true)
                {
                    IPEndPoint remote = null;
                    byte[] message = udp.Receive(ref remote);
                    ShowMessage(Encoding.Default.GetString(message) );
                    if (stopReceive == true) break;
                }
            }
            catch(Exception e)
            {
                //MessageBox.Show(e.Message);
            }
            finally
            {
               if (udp != null) udp.Close();
            }
                
            
        }

        
        // Специальный код доступа к свойствам объектов  из других потоков
        delegate void SetTextCallback(string message);
        void ShowMessage(string message)
        {
            if (this.textBoxReceive.InvokeRequired)
            {
                SetTextCallback dt = new SetTextCallback(ShowMessage);
                this.Invoke(dt, new object[] { message });
            }
            else
            {
                this.textBoxReceive.Text = message;
            }
        }
          
        // Безопасный останов дополнительного потока
        void StopReceive()
        {
            stopReceive = true;
            if (udp != null) udp.Close();
            if (workReceive != null) workReceive.Join();
        }

        // Перед закрытием формы остановим дополнительный поток
        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            StopReceive();
        }


        
    }
}
