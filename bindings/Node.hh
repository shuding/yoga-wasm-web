#pragma once

#include <memory>

#include <yoga/Yoga.h>

#include <emscripten/bind.h>

#include "./Layout.hh"
#include "./Config.hh"

struct MeasureCallback
{
  virtual YGSize measure(float width,
      YGMeasureMode widthMode,
      float height,
      YGMeasureMode heightMode) = 0;
};

struct MeasureCallbackWrapper : public emscripten::wrapper<MeasureCallback>
{
  EMSCRIPTEN_WRAPPER(MeasureCallbackWrapper);
  YGSize measure(float width, YGMeasureMode widthMode, float height, YGMeasureMode heightMode)
  {
    return call<YGSize>("measure", width, widthMode, height, heightMode);
  }
};

struct DirtiedCallback
{
  virtual void dirtied() = 0;
};

struct DirtiedCallbackWrapper : public emscripten::wrapper<DirtiedCallback>
{
  EMSCRIPTEN_WRAPPER(DirtiedCallbackWrapper);
  void dirtied()
  {
    return call<void>("dirtied");
  }
};

class Node {

public:
  static Node* createDefault(void);
  static Node* createWithConfig(Config* config);

  static void destroy(Node* node);

public:
  static Node* fromYGNode(YGNodeRef nodeRef);

private:
  Node(Config* config);

public:
  ~Node(void);

public: // Prevent accidental copy
  Node(Node const&) = delete;

  Node const& operator=(Node const&) = delete;

public:
  void reset(void);

public: // Style setters
  void copyStyle(Node const& other);

  void setPositionType(int positionType);
  void setPosition(int edge, double position);
  void setPositionPercent(int edge, double position);

  void setAlignContent(int alignContent);
  void setAlignItems(int alignItems);
  void setAlignSelf(int alignSelf);
  void setFlexDirection(int flexDirection);
  void setFlexWrap(int flexWrap);
  void setJustifyContent(int justifyContent);

  void setMargin(int edge, double margin);
  void setMarginPercent(int edge, double margin);
  void setMarginAuto(int edge);

  void setOverflow(int overflow);
  void setDisplay(int display);

  void setFlex(double flex);
  void setFlexBasis(double flexBasis);
  void setFlexBasisPercent(double flexBasis);
  void setFlexBasisAuto();
  void setFlexGrow(double flexGrow);
  void setFlexShrink(double flexShrink);

  void setWidth(double width);
  void setWidthPercent(double width);
  void setWidthAuto();
  void setHeight(double height);
  void setHeightPercent(double height);
  void setHeightAuto();

  void setMinWidth(double minWidth);
  void setMinWidthPercent(double minWidth);
  void setMinHeight(double minHeight);
  void setMinHeightPercent(double minHeight);

  void setMaxWidth(double maxWidth);
  void setMaxWidthPercent(double maxWidth);
  void setMaxHeight(double maxHeight);
  void setMaxHeightPercent(double maxHeight);

  void setAspectRatio(double aspectRatio);

  void setBorder(int edge, double border);

  void setPadding(int edge, double padding);
  void setPaddingPercent(int edge, double padding);

public: // Style getters
  int getPositionType(void) const;
  YGValue getPosition(int edge) const;

  int getAlignContent(void) const;
  int getAlignItems(void) const;
  int getAlignSelf(void) const;
  int getFlexDirection(void) const;
  int getFlexWrap(void) const;
  int getJustifyContent(void) const;

  YGValue getMargin(int edge) const;

  int getOverflow(void) const;
  int getDisplay(void) const;

  YGValue getFlexBasis(void) const;
  double getFlexGrow(void) const;
  double getFlexShrink(void) const;

  YGValue getWidth(void) const;
  YGValue getHeight(void) const;

  YGValue getMinWidth(void) const;
  YGValue getMinHeight(void) const;

  YGValue getMaxWidth(void) const;
  YGValue getMaxHeight(void) const;

  double getAspectRatio(void) const;

  double getBorder(int edge) const;

  YGValue getPadding(int edge) const;

public: // Tree hierarchy mutators
  void insertChild(Node* child, unsigned index);
  void removeChild(Node* child);

public: // Tree hierarchy inspectors
  unsigned getChildCount(void) const;

  // The following functions cannot be const because they could discard const
  // qualifiers (ex: constNode->getChild(0)->getParent() wouldn't be const)

  Node* getParent(void);
  Node* getChild(unsigned index);

public: // Measure func mutators
  void setMeasureFunc(MeasureCallback *measureFunc);
  void unsetMeasureFunc(void);

public: // Measure func inspectors
  YGSize callMeasureFunc(
      double width,
      YGMeasureMode widthMode,
      double height,
      YGMeasureMode heightMode) const;

public: // Dirtied func mutators
  void setDirtiedFunc(DirtiedCallback *dirtiedFunc);
  void unsetDirtiedFunc(void);

public: // Dirtied func inspectors
  void callDirtiedFunc(void) const;

public: // Dirtiness accessors
  void markDirty(void);
  bool isDirty(void) const;

public: // Layout mutators
  void calculateLayout(double width, double height, int direction);

public: // Layout inspectors
  double getComputedLeft(void) const;
  double getComputedRight(void) const;

  double getComputedTop(void) const;
  double getComputedBottom(void) const;

  double getComputedWidth(void) const;
  double getComputedHeight(void) const;

  Layout getComputedLayout(void) const;

  double getComputedMargin(int edge) const;
  double getComputedBorder(int edge) const;
  double getComputedPadding(int edge) const;

public:
  void setIsReferenceBaseline(bool isReferenceBaseline);
  bool isReferenceBaseline();

  YGNodeRef m_node;

  std::unique_ptr<MeasureCallback> m_measureFunc;
  std::unique_ptr<DirtiedCallback> m_dirtiedFunc;
};
