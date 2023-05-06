#include <Adafruit_GFX.h>
#include <Adafruit_SH1106.h>

#define MAX_SCREEN_WIDTH 128
#define MAX_SCREEN_HEIGHT 64
#define OLED_RESET -1
#define DEFAULT_CELL_SIZE 5

class Screen
{
public:
	Screen();

	void init();

	void drawText(const String text, int x, int y, int size);

	void drawTextCenter(const String &text, int x, int y, int size);

	void display();

	void clear();

private:
	Adafruit_SH1106G _screen = Adafruit_SH1106G(MAX_SCREEN_WIDTH, MAX_SCREEN_HEIGHT, &Wire, OLED_RESET);
};
