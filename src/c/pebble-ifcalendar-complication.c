#include <pebble.h>
#include "pebble-ifcalendar-complication.h"

static TextLayer *s_output_layer;

static void inbox_received_handler(DictionaryIterator *iter, void *context) {
  Tuple *ifc_tuple = dict_find(iter, MESSAGE_KEY_IFC_Text);
  if (ifc_tuple) {
    text_layer_set_text(s_output_layer, ifc_tuple->value->cstring);
  }
}

void ifc_complication_init(TextLayer *target_layer) {
  s_output_layer = target_layer;
  app_message_register_inbox_received(inbox_received_handler);
  const uint32_t size_in = 64;
  const uint32_t size_out = 64;
  app_message_open(size_in, size_out);
}

void ifc_complication_deinit(void) {
  app_message_deregister_callbacks();
}
