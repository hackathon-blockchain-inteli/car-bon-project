#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include "screen.hpp"

Screen::Screen()
{
}

void Screen::init()
{
	this->_screen.begin(0x3C, true);
	this->_screen.clearDisplay();
	this->_screen.setTextSize(1);
	this->_screen.setTextColor(WHITE);
	this->_screen.setCursor(0, 0);
	this->_screen.display();
	delay(1000);
	this->_screen.clearDisplay();
}

void Screen::drawText(const String text, int x, int y, int size = 1)
{
	this->_screen.setTextSize(size);
	this->_screen.setCursor(x, y);
	this->_screen.print(text);
}

void Screen::drawTextCenter(const String &text, int x, int y, int size = 1)
{
	int16_t x1, y1;
	uint16_t w, h;
	this->_screen.getTextBounds(text, x, y, &x1, &y1, &w, &h);
	this->_screen.setCursor(x - w / 2, y);
	this->_screen.print(text);
}

void Screen::display() { this->_screen.display(); }

void Screen::clear() { this->_screen.clearDisplay(); }
